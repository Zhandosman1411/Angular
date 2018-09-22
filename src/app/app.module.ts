import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
