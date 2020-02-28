import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { BehaviorSubject, combineLatest } from 'rxjs'
import { NgbModal, NgbModalOptions, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap'
import { faAngleDoubleDown, faAngleDoubleUp, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr'

import { AuthService } from '../../../services/auth.service'
import { DataService } from '../../../services/data.service'



@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UomComponent implements OnInit {
  @ViewChild('acc', {static: true}) accordian: NgbAccordion

  createForm: FormGroup
  updateForm: FormGroup
  subForm: FormGroup
  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  faWindowClose = faWindowClose
  modalOptions: NgbModalOptions
  typeValue: String = 'uom'
  current: Object = {}
  public displayedColumns: string[] = ['name', 'description', 'subValues', 'edit', 'delete']
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  searchFormControl = new FormControl();
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  readOnly: Boolean = false
  subChanged = false
  id: String

  constructor(
    private modal: NgbModal,
    private routeInfo: ActivatedRoute,
    private location: Location,
    public authService: AuthService,
    public ds: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.modalOptions = {
      centered: true,
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      subValues: this.fb.group({})
    })
    this.updateForm = this.fb.group({
      id: ["", Validators.required], 
      name: ["", Validators.required],
      description: ["", Validators.required],
      subValues: this.fb.group({})
    })
  }

  ngOnInit() {
    combineLatest(this.ds[`${this.typeValue}$`],
      this.searchFormControl.valueChanges,
      this.sortKey$, this.sortDirection$)
    .subscribe(([data, searchTerm, sortKey, sortDirection]) => {
      const dataArray = Object.values(this.cleanArray(data))

      let filteredData: any[]
      if (!searchTerm) {
        filteredData = dataArray
        this.location.replaceState(`/uom`)
      } else {
        this.location.replaceState(`/uom?search=${searchTerm}`)
        const filteredResults = dataArray.filter(Boolean).filter(item => {
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
  }

  ngOnDestroy() {
  }

  controls(type: string, path: string) {
    const group = this[`${type}Form`].get(path) as FormGroup;
    return Object.keys(group.controls)
  }

  async open(action, content, item, readOnly) {
    try {
      this.readOnly = readOnly
      this.current = item || {}
      if (action !== 'delete') {
        this[`${action}Form`].reset()
        for (let control of this.controls(action, 'subValues')) {
          (<FormGroup>this[`${action}Form`].controls['subValues']).removeControl(control)
        }
      }
      if (item && item.hasOwnProperty('subValues') && (action === 'update')) {
        if (typeof item.subValues === 'string') {
          item.subValues = JSON.parse(item.subValues)
          if (typeof item.subValues === 'string') {
            item.subValues = JSON.parse(item.subValues)
          }
        } else if (item.subValues === null) delete item.subValues
        for (let key in item.subValues) {
          (<FormGroup>this.updateForm.controls['subValues']).addControl(key, this.fb.control(''))
        }
      }
      if (item && (action === 'update')) {
        this[`${action}Form`].patchValue(item)
      }
      await this.modal.open(content, this.modalOptions).result
    } catch (err) {
      // This catches the modal cancel
      if (err && err !== undefined) console.log(`${err.stack}`)
      this.current = {}
    }
  }

  async create() {
    try {
      this.modal.dismissAll()
      this.current = this.createForm.value
      let name = this.current['name']
      let user = this.authService.user
      //@ts-ignore
      if (!user.groups.includes('Admins') || (user.groups.includes('Editors') && !["25", 25].includes(this.current['name']))) {
        return this.toastr.error(`Only UOM 25: Index values may be created by Editors.`)
      }
      if (!this.createForm.valid) {
        return this.toastr.error(`Missing required field or invalid entries`)
      }
      this.toastr.success(`Processing Create for ${name}...`)
      if (this.current.hasOwnProperty('subValues')) {
        if (typeof this.current['subValues'] === 'object') {
          if (Object.entries(this.current['subValues']).length === 0 && this.current['subValues'].constructor === Object) {
            delete this.current['subValues']
          } else {
            this.current['subValues'] = JSON.stringify(this.current['subValues'])
          }
        }
      }
      this.current['name'] = parseInt(this.current['name'], 10)
      await this.ds.callApi(this.typeValue, 'create', this.current)
      this.toastr.success(`Create of ${name} Successful!`)
    } catch (err) {
      if (err && typeof err === 'object') {
        this.toastr.error(`Failed to Create ${name} :: ${JSON.stringify(err)}`)
        console.log(`create error: ${JSON.stringify(err)}`)
      } else {
        this.toastr.error(`Failed to Create ${name} :: ${err}`)
        console.log(`create error: ${err}`)
      }
    }
    this.current = {}
    this.createForm.reset()
    this.subChanged = false
  }

  async modify() {
    try {
      this.modal.dismissAll()
      let type = this.typeValue
      // Deepcopy hack
      this.current = JSON.parse(JSON.stringify(this.updateForm.value))
      let name = this.current['name'] || this.current['id']
      console.log(`${type} Update`)
      if (this.updateForm.pristine && !this.subChanged) {
        return this.toastr.error(`Nothing Changed`)
      }
      if (!this.updateForm.valid) {
        return this.toastr.error(`Missing required field`)
      }
      this.toastr.success(`Processing Update for ${name}...`)
      if (this.current.hasOwnProperty('subValues')) {
        if (typeof this.current['subValues'] === 'object') {
          if (Object.entries(this.current['subValues']).length === 0 && this.current['subValues'].constructor === Object) {
            delete this.current['subValues']
          } else {
            this.current['subValues'] = JSON.stringify(this.current['subValues'])
          }
        }
      }
      this.current['name'] = parseInt(this.current['name'], 10)
      await this.ds.callApi(type, 'update', this.current)
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
    this.subChanged = false
  }

  async delete () {
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

  addControl(type, index, value) {
    let existing = this.controls(type, 'subValues')
    if (!index || !value) {
      return this.toastr.error(`Index and Value Required`)
    }
    if (existing.includes(index)) {
      return this.toastr.error(`That Index is already present`)
    }
    (<FormGroup>this[`${type}Form`].controls['subValues']).addControl(index.toString(), this.fb.control(value))
    this.subChanged = true
  }

  removeControl(type, control) {
    ;(<FormGroup>this[`${type}Form`].controls['subValues']).removeControl(control)
    this.subChanged = true
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
