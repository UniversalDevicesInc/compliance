import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlsComponent } from './nls.component';

describe('NlsComponent', () => {
  let component: NlsComponent;
  let fixture: ComponentFixture<NlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
