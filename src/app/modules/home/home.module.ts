import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddInListComponent } from './components/todo-add-in-list/todo-add-in-list.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoListComponent,
    TodoAddInListComponent,
    DeleteAllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TodoListComponent,
    TodoAddInListComponent,
    DeleteAllComponent
  ]
})
export class HomeModule { }
