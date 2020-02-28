import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorrangeComponent } from './editorrange.component';

describe('EditorrangeComponent', () => {
  let component: EditorrangeComponent;
  let fixture: ComponentFixture<EditorrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
