import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  item:string = 'abc';
  items:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  addToDo(event){
    this.items.push(event);
  }
}
