import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddInListComponent } from './todo-add-in-list.component';

describe('TodoAddInListComponent', () => {
  let component: TodoAddInListComponent;
  let fixture: ComponentFixture<TodoAddInListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddInListComponent]
    });
    fixture = TestBed.createComponent(TodoAddInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
