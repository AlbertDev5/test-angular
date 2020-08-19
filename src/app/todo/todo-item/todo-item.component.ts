import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {


  item: Item;

  @Input()
  set itemIn(value: Item) {
    this.item = value;
  }

  @Output()
  checkedValueEmitter = new EventEmitter<Item>();
  @Output()
  deleteItemEmitter = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(): void {
    console.log('desde item value', this.item);
    this.checkedValueEmitter.emit(this.item);
  }

  deleteItem(): void {
    this.deleteItemEmitter.emit(this.item);
  }

}
