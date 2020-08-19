import {Component, OnInit} from '@angular/core';
import {Item} from './models/item';
import {TodoService} from './services/todo.service';
import {FilterType} from './enums/filterType';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  todoItems: Item[] = [];
  todoItemsCache: Item[] = [];
  filterType = FilterType.All;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    // this.todoService.getDummyData().forEach(i => this.todoItems.push(i));
    // this.todoService.getDummyData().forEach(i => this.todoItemsCache.push(i));
  }

  addedItem(item): void {
    console.log('addedItem(item)', item);
    this.todoItemsCache.push(item);
    this.filterData(this.filterType);
  }

  filterData(filterType): void {
    console.log('filterType', filterType);
    this.filterType = filterType;
    this.todoItems = this.todoService.filterData(filterType, this.todoItemsCache);
  }

  deleteCompletedItems(): void {
    this.todoItems = this.todoItems.filter(i => !i.completed);
    this.todoItemsCache = this.todoItemsCache.filter(i => !i.completed);
  }

  deleteCompletedItem(item: Item): void {
    this.todoItems = this.todoItems.filter(i => i.id !== item.id);
    this.todoItemsCache = this.todoItemsCache.filter(i => i.id !== item.id);
  }

  toggleCheckedValue(item: Item) {
    console.log('ultimo valor cambiado', item);
    const aux = !item.completed;
    console.log('aux', aux);
    this.todoItems.forEach(i => {
      if (i.id === item.id) {
        i.completed = aux;
        console.log('fin', i);
      }
    });
    this.todoItemsCache.forEach(i => {
      if (i.id === item.id) {
        i.completed = aux;
        console.log('fin cache', i);
      }
    });

    this.filterData(this.filterType);
  }

}
