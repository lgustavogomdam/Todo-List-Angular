import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../../model/task-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  public taskList: Array<TaskInterface> = [];

  constructor(){

  }

  ngOnInit(): void {
    
  }

  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Tem certeza que deseja Deletar tudo?");

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: any) {
    return this.taskList.push({ task: event, check: false });
  }
}
