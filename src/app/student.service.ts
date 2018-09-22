import { Injectable } from '@angular/core';
import { Student } from './models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

students: Student[] = [
  {id: 1, name: 'Zhandos', gender : false, dateOfBirth: new Date('11.14.1997')},
  {id: 2, name: 'aaa', gender : true, dateOfBirth: new Date('05.10.1997')},
];

constructor() { }
getStudents() {
    return this.students;
  }

  // addStudent(name: string) {
  //   this.students.push({ id: Math.max(...this.students.map(s => s.id)) + 1 , name: name, group: 'VTiPO'});
  // }
  // deleteStudent(studentId: number) {
  //   this.students = this.students.filter(s => s.id !== studentId);
  // }

}
