import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterType} from '../enums/filterType';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filterType = FilterType;
  filterTypeSelected = FilterType.All;

  @Output()
  filterTypeEmitter = new EventEmitter<FilterType>();
  @Output()
  deleteCompletedEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeFilterType(filterType: FilterType): void {
    this.filterTypeSelected = filterType;
    this.filterTypeEmitter.emit(this.filterTypeSelected);
  }

  deleteCompletedItems(): void {
    this.deleteCompletedEmitter.emit();
  }

}
