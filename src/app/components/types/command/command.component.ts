import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs'
import { NgbModal, NgbModalOptions, NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap'
import { faAngleDoubleDown, faAngleDoubleUp, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr'


import { AuthService } from '../../../services/auth.service'
import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  @ViewChild('acc', {static: true}) accordian: NgbAccordion

  createForm: FormGroup
  updateForm: FormGroup
  deleteForm: FormGroup
  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  faWindowClose = faWindowClose
  modalOptions: NgbModalOptions
  typeValue: String = 'command'
  current: Object = {}
  public displayedColumns: string[] = ['name','description','params','edit','delete']
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  searchFormControl = new FormControl();
  tableDataSource$ = new BehaviorSubject<any[]>([]);

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
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    })
    this.updateForm = this.fb.group({
      id: ["", Validators.required], 
      name: ["", Validators.required],
      description: ["", Validators.required]
    })
    this.deleteForm = this.fb.group({
      id: ["", Validators.required]
    })
  }

  ngOnInit() {
    combineLatest(this.ds[`${this.typeValue}$`], 
      this.searchFormControl.valueChanges,
      this.sortKey$, this.sortDirection$)
    .subscribe(([data, searchTerm, sortKey, sortDirection]) => {
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
    if (this.ds.currentDomain) {
      this.ds.loadType(this.typeValue)
    }
  }

  ngOnDestroy() {
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
    }
  }

  async create() {
    this.modal.dismissAll()
    try {
      let name = this.createForm.value.name
      this.current = this.cleanObject(this.createForm.value)
      console.log(`${this.typeValue} Update`)
      if (!this.createForm.valid) {
        return this.toastr.error(`Missing required field`)
      }
      this.toastr.success(`Processing Create for ${name}...`)
      await this.ds.callApi(this.typeValue, 'create', this.current)
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
  }

  async modify() {
    this.modal.dismissAll()
    this.current = this.cleanObject(this.updateForm.value)
    let name = this.current['name'] || this.current['id']
    console.log(`${this.typeValue} Update`)
    if (this.updateForm.pristine) {
      return this.toastr.error(`Nothing Changed`)      
    }
    if (!this.updateForm.valid) {
      return this.toastr.error(`Missing required field`)
    }
    this.toastr.success(`Processing Update for ${name}...`)
    try {
      console.log(this.current)
      await this.ds.callApi(this.typeValue, 'update', this.current)
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
  }

  async delete() {
    try {
      this.modal.dismissAll()
      let type = this.typeValue
      console.log(this.current)
      if (this.current.hasOwnProperty('compliance')) {
        for (let link of this.current['compliance'].items) {
          this.toastr.success(`Removing Links...`)
          await this.ds.deleteComplianceCommandLink(link.id)
        }
      }
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
