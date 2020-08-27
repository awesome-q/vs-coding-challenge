import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {
  @Input()
  events: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this);
  }

}
