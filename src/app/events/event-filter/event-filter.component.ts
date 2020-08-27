import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';


// this would better be suited to implement ControlValueAccessor
@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit, OnDestroy {
  @Output()
  filterSearch: EventEmitter<string> = new EventEmitter();

  searchInput: FormControl = new FormControl('');

  private _destroy$: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        debounceTime(1000)
      )
      .subscribe((query: string) => this.filterSearch.emit(query));
  }


  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
