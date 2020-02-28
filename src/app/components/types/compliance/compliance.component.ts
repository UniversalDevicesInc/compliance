import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { BehaviorSubject, combineLatest, Subscription, of } from 'rxjs'
import { NgbModal, NgbModalOptions, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap'
import { faAngleDoubleDown, faAngleDoubleUp, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr'

import { AuthService } from '../../../services/auth.service'
import { DataService } from '../../../services/data.service'


@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit {
  @ViewChild('acc', {static: true}) accordian: NgbAccordion

  createForm: FormGroup
  updateForm: FormGroup
  deleteForm: FormGroup
  statusForm: FormGroup
  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  faWindowClose = faWindowClose
  modalOptions: NgbModalOptions
  typeValue: String = 'compliance'
  current: Object = {}
  logs
  public displayedColumns: string[] = ['name','description','state','author','createdAt','updatedAt','logs','edit','delete']
  public statusColumns: string[] = ['name','description','unlink']
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  searchFormControl = new FormControl();
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  subscription = new Subscription

  currentCompliance$ = new BehaviorSubject<Object>(null)
  currentStatus$ = new BehaviorSubject<Object>([{}])
  selectedStatus
  selectedLink

  constructor(
    public router: Router,
    private routeInfo: ActivatedRoute,
    private location: Location,
    private modal: NgbModal,
    public authService: AuthService,
    public ds: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.modalOptions = {
      centered: true,
      backdrop:'static'
    }
    this.createForm = this.fb.group({
      name: [, Validators.required],
      description: [null, Validators.required],
      domainId: [null, Validators.required],
      hint: [null]
    })
    this.updateForm = this.fb.group({
      id: ['', Validators.required], 
      name: [, Validators.required],
      description: [null, Validators.required],
      domainId: [null, Validators.required],
      hint: [null],
      state: [null, Validators.required],
    })
    this.deleteForm = this.fb.group({
      id: ["", Validators.required]
    })
    this.statusForm = this.fb.group({
      status: ["", Validators.required]
    })
  }

  ngOnInit() {
    this.subscription.add(this.currentCompliance$.subscribe(data => {
      if (data && data.hasOwnProperty('status') && data['status'].hasOwnProperty('items')) {
        this.currentStatus$.next(data['status'].items)
      }
    }))
    combineLatest(this.ds[`${this.typeValue}$`], 
      this.searchFormControl.valueChanges,
      this.sortKey$, this.sortDirection$)
    .subscribe(([data, searchTerm, sortKey, sortDirection]) => {
      if (data && this.currentCompliance$.value !== null) {
        //@ts-ignore
        for (let item of data) {
          if (item.id === this.currentCompliance$.value['id']) {
            this.currentCompliance$.next(item)
          }
        }
      }
      const dataArray = Object.values(data)
      let filteredData: any[]

      if (!searchTerm) {
        filteredData = dataArray
        this.location.replaceState(`/${this.typeValue}`)
      } else {
        this.location.replaceState(`/${this.typeValue}?search=${searchTerm}`)
        const filteredResults = dataArray.filter(item => {
          return Object.values(item).reduce((prev, curr) => {
            return prev || curr.toString().toLowerCase().includes(searchTerm.toLowerCase())
          }, false)
        })
        filteredData = filteredResults
      }

      let isNumbers: boolean = true
      let sortedData
      for (let item of filteredData) {
        if (!/^[0-9]*$/g.test(item[sortKey])) {
          isNumbers = false
        }
      }
      if (isNumbers) {
        sortedData = filteredData.sort((a, b) => {
          return sortDirection === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]
        })
      } else {
        sortedData = filteredData.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1
          if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1
          return 0
        })
      }
      this.tableDataSource$.next(sortedData)
    })
    this.searchFormControl.setValue('');
    combineLatest(this.tableDataSource$, this.currentPage$, this.pageSize$)
    .subscribe(([allSources, currentPage, pageSize]) => {
      const startingIndex = (currentPage - 1) * pageSize
      const onPage = allSources.slice(startingIndex, startingIndex + pageSize)
      this.dataOnPage$.next(onPage)
    })
    let id = this.routeInfo.snapshot.queryParamMap.get('search') || null
    if (id) { this.searchFormControl.patchValue(id) }
    this.getData()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async getData() {
    if (this.ds.currentDomain) {
      return this.ds.loadType(this.typeValue)
    }
  }

  async open(action, content, item) {
    try {
      this.current = item || {}
      this[`${action}Form`].reset()
      if (item) {
        this[`${action}Form`].patchValue(item)
      }
      await this.modal.open(content, this.modalOptions).result
    } catch (err) {
      // This catches the modal cancel
      this.current = {}
    }
  }

  async openLogs(content, item) {
    const modalOptions:NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    }
    try {
      this.logs = item['complianceLogs'].items
      await this.modal.open(content, modalOptions).result
    } catch {
      this.logs = []
    }
  }

  async openNaked(content) {
    try {
      await this.modal.open(content, this.modalOptions).result
    } catch {
      // This catches the modal cancel
    }
  }

  async create() {
    this.modal.dismissAll()
    try {
      let name = this.createForm.value.name
      this.current = this.cleanObject(this.createForm.value)
      console.log(`${this.typeValue} Update`)
      this.current['author'] = this.authService.user.email
      this.current['state'] = 'PROPOSED'
      this.current['lastModifiedBy'] = this.authService.user.email
      if (!this.createForm.valid) {
        return this.toastr.error(`Missing required field`)
      }
      this.toastr.success(`Processing Create for ${name}...`)
      let result = await this.ds.callApi(this.typeValue, 'create', this.current)
      // Add Log of creation
      await this.ds.addComplianceLog(result['id'], this.authService.user.email, `Initial Creation`)
      this.toastr.success(`Create of ${name} Successful!`)
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Update ${name} :: ${JSON.stringify(err)}`)
        console.log(`create error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Update ${name} :: ${err}`)
        console.log(`create error: ${err}`)
      }   
    }
    this.current = {}
    this.createForm.reset()
    await this.ds.loadType(this.typeValue)
  }

  async modify(comment) {
    this.modal.dismissAll()
    this.current = this.cleanObject(this.updateForm.value)
    let name = this.current['name'] || this.current['id']
    let id = this.current['id']
    console.log(`${this.typeValue} Update`)
    if (this.updateForm.pristine) {
      return this.toastr.error(`Nothing Changed`)      
    }
    if (!this.updateForm.valid || !comment) {
      return this.toastr.error(`Missing required field`)
    }
    this.toastr.success(`Processing Update for ${name}...`)
    try {
      await this.ds.callApi(this.typeValue, 'update', this.current)
      await this.ds.addComplianceLog(id, this.authService.user.email, `${comment}`)
      this.toastr.success(`Update of ${name} Successful!`)
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Update ${name} :: ${JSON.stringify(err)}`)
        console.log(`modify error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Update ${name} :: ${err}`)
        console.log(`modify error: ${err}`)
      }   
    }
    this.updateForm.reset()
    this.current = {}
    await this.ds.loadType(this.typeValue)
  }

  async delete() {
    try {
      this.modal.dismissAll()
      let type = this.typeValue
      let name = this.current['name'] || this.current['id']
      this.toastr.success(`Processing Delete for ${name}...`)
      await this.ds.callApi(type, 'delete', { id: this.current['id'] })
      this.toastr.success(`Delete ${name} Successful!`)
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Delete ${name} :: ${JSON.stringify(err)}`)
        console.log(`modify error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Delete ${name} :: ${err}`)
        console.log(`modify error: ${err}`)
      }
    }
    this.current = {}
  }

  async createLink() {
    try {
      if (!this.selectedStatus) {
        return this.toastr.error(`Nothing selected.`)
      }
      this.modal.dismissAll()
      for (let status of this.currentCompliance$.value['status']['items']) {
        if (status['status'].id === this.selectedStatus.id) {
          return this.toastr.error(`Already Linked.`)
        }
      }
      if (this.currentCompliance$.value['id'] && this.selectedStatus.id) {
        this.toastr.success(`Linking ${this.selectedStatus.name} to Compliance ${this.currentCompliance$.value['name']}...`)
        await this.ds.addComplianceStatusLink(this.currentCompliance$.value['id'], this.selectedStatus.id)
        this.toastr.success(`Successfully linked ${this.selectedStatus.name} to Compliance ${this.currentCompliance$.value['name']}`)
        this.getData()
      }
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Link :: ${JSON.stringify(err)}`)
        console.log(`link error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Link :: ${err}`)
        console.log(`link error: ${err}`)
      }
    }
    this.selectedStatus = null
  }

  async deleteLink() {
    try {
      if (!this.selectedLink) return
      let name = `${this.selectedLink.status.name}`
      this.modal.dismissAll()
      this.toastr.success(`Removing link for ${name} to Compliance ${this.currentCompliance$.value['name']}...`)
      await this.ds.deleteComplianceStatusLink(this.selectedLink.id)
      this.toastr.success(`Successfully removed link for ${name}`)
      this.getData()
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Remove Link :: ${JSON.stringify(err)}`)
        console.log(`link error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Remove Link :: ${err}`)
        console.log(`link error: ${err}`)
      }
    }
    this.selectedLink = null 
  }

  scroll(element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 500)
    
  }

  adjustSort(key: string) {
    if (this.sortKey$.value === key) {
      if (this.sortDirection$.value === 'asc') {
        this.sortDirection$.next('desc');
      } else {
        this.sortDirection$.next('asc');
      }
      return;
    }
  
    this.sortKey$.next(key);
    this.sortDirection$.next('asc');
  }

  cleanObject(obj) {
    return Object.entries(obj).reduce((a,[k,v]) => (v == null ? a : {...a, [k]:v}), {})
  }

  cleanArray(array) {
    let cleanArray = []
    for (let obj of array) {
      cleanArray.push(Object.entries(obj).reduce((a,[k,v]) => (v == null ? a : {...a, [k]:v}), {}))
    }
    return cleanArray    
  }

  togglePanel(id){
    this.accordian.toggle(id);
  }
}

