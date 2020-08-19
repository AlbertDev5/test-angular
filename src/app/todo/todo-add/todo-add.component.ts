import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  @Output()
  newItem = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit() {
  }

  addItemEvent(event): void {
    console.log(event);
    this.newItem.emit({id: Date.now(), label: event.target.value, completed: false, editing: false});
    event.target.value = '';
  }

}
