import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  student: Student;
  editMode: false;
  tempGender: boolean;
  constructor() { }

  ngOnInit() {
  }
  cancelEdit() {
    this.editMode = false;
  }
  saveChanges(name: string, dateOfBirth: Date, gender: boolean) {
    this.student.name = name;
    this.student.dateOfBirth = dateOfBirth;
    this.student.gender = this.tempGender;

    this.editMode = false;
  }
  genderChanged(gfv) {
    if (+gfv === 0) {
      this.tempGender = false;
    } else {
      this.tempGender = true;
    }
  }
}
