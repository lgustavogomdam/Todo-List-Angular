import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-in-list',
  templateUrl: './todo-add-in-list.component.html',
  styleUrls: ['./todo-add-in-list.component.scss']
})
export class TodoAddInListComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter();

  public itemTaskList : string = "";
  
  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submitItemTaskList() {
    this.itemTaskList = this.itemTaskList.trim();

    if (this.itemTaskList) {
      this.emitItemTaskList.emit(this.itemTaskList);
      this.itemTaskList = "";
    }
  };
}
