import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandparamComponent } from './commandparam.component';

describe('CommandparamComponent', () => {
  let component: CommandparamComponent;
  let fixture: ComponentFixture<CommandparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
