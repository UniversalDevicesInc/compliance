import { Injectable } from '@angular/core'
import { BehaviorSubject, ReplaySubject } from 'rxjs'

import { API, graphqlOperation } from 'aws-amplify'
import * as QlApi from '../API.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _domain: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _compliance: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _status: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _command: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _commandparam: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _editor: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _editorrange: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _nls: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _uom: ReplaySubject<Array<Object>> = new ReplaySubject(1)
  private _dataStore: Object = {}
  private _listeners: Array<string> = []
  private _subApi: Object = {}
  private _crudApi: Object = {}

  readonly domain$ = this._domain.asObservable()
  readonly compliance$ = this._compliance.asObservable()
  readonly status$ = this._status.asObservable()
  readonly command$ = this._command.asObservable()
  readonly commandparam$ = this._commandparam.asObservable()
  readonly editor$ = this._editor.asObservable()
  readonly editorrange$ = this._editorrange.asObservable()
  readonly nls$ = this._nls.asObservable()
  readonly uom$ = this._uom.asObservable()

  public apiTypes = ["domain","compliance","status","command","commandparam","editor","editorrange","nls","uom"]
  public currentDomain: QlApi.GetDomainQuery

  public dataLoaded$: ReplaySubject<boolean> = new ReplaySubject(1)
  public currentDomain$: BehaviorSubject<Object> = new BehaviorSubject(1)

  constructor(
    private qlApi: QlApi.APIService
  ) { }

  async init() {
    this.createApi()
    this.addSubs()
    this.loadData()
  }

  // Create CRUD API for GraphQL Models
  async createApi() {
    for (const [i, type] of this.apiTypes.entries()) {
      // Set empty array for dataStore for each type
      this._dataStore[type] = []
      // Create Listener API Objects
      // Capitalize domain > Domain for API construction from API.service
      const capitalized = type.charAt(0).toUpperCase() + type.slice(1)
      // Add the 3 listener methods for this type from API.service
      this._listeners.push(`OnCreate${capitalized}Listener`, `OnUpdate${capitalized}Listener`, `OnDelete${capitalized}Listener`)
      // Add the 3 incoming/function respose properties for this type
      // Create Update Delete API build
      this._crudApi[type] = {}
      for (let cud of ['onCreate', 'onUpdate', 'onDelete']) {
        // Incoming API responds with onCreateDomain, etc
        this._subApi[`${cud}${capitalized}`] = {
          // func: target function for this CUD type
          func: this[cud] || this.notFound,
          // dataStore: location of cache
          dataStore: type
        }
        // Adds 3 properties per type (create, update, delete)
        this._crudApi[type][`${cud.slice(2).toLowerCase()}`] = {
          // Target function for each property
          func: this.qlApi[`${cud.slice(2)}${capitalized}`],
          // dataStore: location of cache
          dataStore: type,
          // Model and Typing from APIService
          model: `${cud.slice(2)}${capitalized}Input`
        }
      }
      // Create List Query API
      // read conforms to CRUD as opposed to 'query' or 'olist
      this._crudApi[type]['read'] = {
        // Target Function e.g. ListDomains
        func: this.qlApi[`List${capitalized}s`],
        dataStore: type,
        model: `List${capitalized}sQuery`
      }
    }
  }

  async onCreate(type, data) {
    console.log(`${type} added: ${data.name}(${data.id}) - ${data.description}`)
    this._dataStore[type].push(data)
    this._dataStore[type].sort(this.sortData)
    this[`_${type}`].next(this._dataStore[type])
  }
  async onUpdate(type, data) {
    console.log(`${type} updated: ${data.name}(${data.id}) - ${data.description}`)
    this._dataStore[type] = this._dataStore[type].filter(item => item.id !== data.id)
    this._dataStore[type].push(data)
    this._dataStore[type].sort(this.sortData)
    this[`_${type}`].next(this._dataStore[type])
  }
  async onDelete(type, data) {
    console.log(`${type} deleted: ${data.name || "none"}(${data.id}) - ${data.description || "none"}`)
    this._dataStore[type] = this._dataStore[type].filter(item => item.id !== data.id).sort(this.sortData)
    this[`_${type}`].next(this._dataStore[type])
  }
  async notFound(type, data) {
    console.log(`notFound: ${type} type was not found :: ${JSON.stringify(data)}`)
  }

  async loadData() {
    try {
      console.log(`Requesting Data from API`)
      let dataLoads = []
      for(let type of this.apiTypes) {
        // Get all Data types and load into memory
        dataLoads.push(this._crudApi[type].read.func(null, 500).then(data => {
          this._dataStore[type] = data.items.sort(this.sortData)
          this[`_${type}`].next(this._dataStore[type])
        }))
      }
      await Promise.all(dataLoads)
      console.log(`Data Loaded from API`)
      if (this._dataStore.hasOwnProperty('domain') && this._dataStore['domain'].length > 0) {
        this.currentDomain = this._dataStore['domain'].filter(d => d.id === "ecc625a7-c7d5-4f8e-8225-0d529e423c39")[0]
        this.currentDomain$.next(this.currentDomain)
        console.log(`Set default domain to ${this.currentDomain.name}`)
      }
      this.dataLoaded$.next(true)
    } catch (err) {
      console.log(`loadData error: ${err} :: ${JSON.stringify(err)}`)
    }
  }

  async loadType(type) {
    try {
      if (this.apiTypes.includes(type)) {
        let data = await this._crudApi[type].read.func(null, 500)
        this._dataStore[type] = data.items.sort(this.sortData)
        this[`_${type}`].next(this._dataStore[type])
        console.log(`Reloaded ${type} data`)
      }
    } catch (err) {
      if (err) console.log(err)
    }
  }

  async changeDomain(id) {
    if (this.currentDomain.hasOwnProperty('id') && this.currentDomain.id !== id) {
      this.currentDomain = this._dataStore['domain'].filter(d => d.id === id)[0]
      this.currentDomain$.next(this.currentDomain)
      console.log(`Changed current domain to ${this.currentDomain.name}(${this.currentDomain.id})`)
    } else {
      console.log(`Already using domain ${this.currentDomain.id}`)
    }
  }

  async addSubs() {
    console.log(`Subscribing to real-time streams`)
    for (let listener of this._listeners) {
      this.qlApi[listener].subscribe({
        next: (data) => {
          try {
            for (let key in data.value.data) {
              let processed = false
              if (data.value.data.hasOwnProperty(key)) {
                console.log(`${key} update received for ${this._subApi[key].dataStore}. Processing...`);
                (this._subApi[key].func || this.notFound).call(this, `${this._subApi[key].dataStore}`, data.value.data[key])
                processed = true
              }
              if (data.value.hasOwnProperty('errors') && data.value.errors.length > 0) {
                for (let error of data.value.errors) {
                  console.log(`api error: ${error.message}`)
                }
                processed = true
              }
              if (!processed) console.log(`Sub unable to process data :: ${key} :: ${data.value}`)
            }
          } catch (err) {
            console.log(`sub error: ${err} ${JSON.stringify(err)}`)
          }
        }
      })
    }
  }

  async callApi(type, action, payload) {
    console.log(`Called ${type} with ${action} payload ${JSON.stringify(payload)}`)
    return this._crudApi[type][action].func(payload)
  }

  async addComplianceLog(complianceId, user, comment) {
    return this.qlApi.CreateComplianceLog({
      complianceId: complianceId,
      comment: comment,
      user: user
    })
  }

  async addComplianceStatusLink(complianceId, statusId) {
    return this.qlApi.CreateComplianceStatusLink({
      complianceId: complianceId,
      statusId: statusId
    })
  }

  async deleteComplianceStatusLink(id) {
    return this.qlApi.DeleteComplianceStatusLink({
      id: id
    })
  }

  async addComplianceCommandLink(complianceId, commandId) {
    return this.qlApi.CreateComplianceCommandLink({
      complianceId: complianceId,
      commandId: commandId
    })
  }

  async deleteComplianceCommandLink(id) {
    return this.qlApi.DeleteComplianceCommandLink({
      id: id
    })
  }

  sortData(a,b) {
    if (a && b && a.hasOwnProperty('name') && b.hasOwnProperty('name')) {
      if (Number.isFinite(a['name']) && Number.isFinite(b['name'])) {
        return a['name'] - b['name']
      }
      else {
        if (a['name'] > b['name']) return 1
        if (a['name'] < b['name']) return -1
      }
    } else return 0
  }
  
}
