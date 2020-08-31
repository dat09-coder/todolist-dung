import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBtnComponent } from './todo-btn.component';

describe('TodoBtnComponent', () => {
  let component: TodoBtnComponent;
  let fixture: ComponentFixture<TodoBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
