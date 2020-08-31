import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input('item') edittingItem:string;
  @Output('itemChange') itemChange: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
 test(){
   console.log(this.itemChange);
   this.itemChange.emit(this.edittingItem);
 }
}
