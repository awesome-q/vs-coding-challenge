import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsFormComponent } from './add-events-form.component';

describe('AddEventsFormComponent', () => {
  let component: AddEventsFormComponent;
  let fixture: ComponentFixture<AddEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
