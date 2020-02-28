import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { faAngleDoubleDown, faAngleDoubleUp, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap'
import { ToastrService } from 'ngx-toastr'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { BehaviorSubject, combineLatest } from 'rxjs'


import { AuthService } from '../../../services/auth.service'
import { DataService } from '../../../services/data.service'


@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  @ViewChild('acc', {static: true}) accordian: NgbAccordion

  createForm: FormGroup
  updateForm: FormGroup
  deleteForm: FormGroup
  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  faWindowClose = faWindowClose
  modalOptions: NgbModalOptions
  typeValue: String = 'domain'
  current: Object = {}
  public displayedColumns: string[] = ['name', 'description', 'compliance', 'edit', 'delete']
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(10);
  dataOnPage$ = new BehaviorSubject<any[]>([]);
  sortKey$ = new BehaviorSubject<string>('name');
  sortDirection$ = new BehaviorSubject<string>('asc');
  searchFormControl = new FormControl();
  tableDataSource$ = new BehaviorSubject<any[]>([]);

  constructor(
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
      } else {
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
    console.log(`Domain ${action}`)
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

  togglePanel(id){
    this.accordian.toggle(id);
  }


}
