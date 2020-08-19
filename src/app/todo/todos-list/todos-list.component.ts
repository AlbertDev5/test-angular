import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todoItems: Item[] = [];

  @Input()
  set todoItemsIn(value: Item[]) {
    this.todoItems = value;
  }

  @Output()
  checkedValue = new EventEmitter<Item>();
  @Output()
  deleteItemEmitter = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCheckedValue(item) {
    this.checkedValue.emit(item);
  }

  deleteItem(item: Item): void {
    this.deleteItemEmitter.emit(item);
  }

}
