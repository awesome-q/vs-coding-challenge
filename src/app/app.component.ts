import { Component, OnInit } from '@angular/core';
import { EventsService } from './events/events.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  get response(): any[] {
    return this._response.filter((event) => {
      if (!this._searchQuery) { return true; }

      return [event.venue.city.toLowerCase(), event.date.toLowerCase()]
        .join('')
        .includes(this._searchQuery.toLowerCase());
    });
  }

  set response(res: any[]) {
    this._response = res;
  }

  private _searchQuery: string;

  private _response: any[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(({ body }: HttpResponse<any>) => this.response = body);
  }

  filterResults(query: string) {
    this._searchQuery = query;
  }

}
