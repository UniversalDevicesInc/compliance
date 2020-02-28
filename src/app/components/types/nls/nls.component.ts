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
  selector: 'app-nls',
  templateUrl: './nls.component.html',
  styleUrls: ['./nls.component.scss']
})
export class NlsComponent implements OnInit {
  @ViewChild('acc', {static: true}) accordian: NgbAccordion

  createForm: FormGroup
  updateForm: FormGroup
  deleteForm: FormGroup
  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  faWindowClose = faWindowClose
  modalOptions: NgbModalOptions
  typeValue: String = 'nls'
  current: Object = {}
  public displayedColumns: string[] = ['name', 'description', 'edit', 'delete']
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  searchFormControl = new FormControl();
  tableDataSource$ = new BehaviorSubject<any[]>([]);

  constructor(
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
      const dataArray = Object.values(this.cleanArray(data))
      //dataArray.concat(staticArray)

      let filteredData: any[]
      if (!searchTerm) {
        filteredData = dataArray
        this.location.replaceState(`/${this.typeValue}`)
      } else {
        this.location.replaceState(`/${this.typeValue}?search=${searchTerm}`)
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

  async modify(action) {
    this.modal.dismissAll()
    let name
    if (action === 'create') { name = this.createForm.value.name } else
    name = this.current['name'] || ''
    const cap = action.charAt(0).toUpperCase() + action.substring(1)
    console.log(`${this.typeValue} ${action}`)
    if (this[`${action}Form`].pristine && action !== 'delete') {
      return this.toastr.error(`Nothing Changed`)      
    }
    if (!this[`${action}Form`].valid) {
      return this.toastr.error(`Missing required field`)
    }
    this.toastr.success(`Processing ${action} for ${this.current['name']}...`)
    try {
      await this.ds.callApi(this.typeValue, action, this[`${action}Form`].value)
      this.toastr.success(`${cap} ${name} Successful!`)
    } catch (err) {
      this.toastr.error(`Failed to ${cap} ${name} :: ${err}`)
    }
    this[`${action}Form`].reset()
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
