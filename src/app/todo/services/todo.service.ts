import {Injectable} from '@angular/core';
import {Item} from '../models/item';
import {FilterType} from '../enums/filterType';

@Injectable({providedIn: 'root'})
export class TodoService {

  getDummyData(): Item[] {
    return [
      {id: 1, label: 'uno', completed: false, editing: false},
      {id: 2, label: 'dos', completed: true, editing: false},
      {id: 3, label: 'tres', completed: false, editing: false},
      {id: 4, label: 'cuatro', completed: true, editing: false},
      {id: 5, label: 'cinco', completed: false, editing: false},
    ];
  }

  filterData(filterType: FilterType, todoItemsCache: Item[]): Item[] {
    let todoItems: Item[] = [];
    if (filterType === FilterType.All) {
      todoItemsCache.forEach(i => todoItems.push(Object.assign({}, i)));
    } else if (filterType === FilterType.Pending) {
      todoItems = todoItemsCache.filter(i => !i.completed);
    } else if (filterType === FilterType.Completed) {
      todoItems = todoItemsCache.filter(i => i.completed);
    } else {
      todoItems = [];
    }
    return todoItems;
  }

}
