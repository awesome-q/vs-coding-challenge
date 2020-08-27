import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddEventsFormComponent } from './add-events-form/add-events-form.component';



@NgModule({
  declarations: [
    EventFilterComponent,
    EventListComponent,
    AddEventsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EventFilterComponent,
    EventListComponent,
    AddEventsFormComponent
  ]
})
export class EventsModule { }
