import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
selector: 'app-students-list',
templateUrl: './students-list.component.html',
styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

students: Student [];
selectedStudent: Student;
constructor(private studentService: StudentService) { }

ngOnInit() {
this.students = this.studentService.getStudents();
}

selectStudent(student: Student) {
this.selectedStudent = student;
  }
}
