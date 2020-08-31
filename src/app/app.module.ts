import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { FormInputComponent } from './todo/form-input/form-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoBtnComponent } from './todo/todo-btn/todo-btn.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from'@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    FormInputComponent,
    TodoListComponent,
    TodoBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
