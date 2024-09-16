import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudents(): Student[] {
    const localData = localStorage.getItem('angularCurd');
    return localData ? JSON.parse(localData) : [];
  }

  saveStudent(student: Student) {
    const localData = localStorage.getItem('angularCurd');
    let students = [];
    if (localData) {
      students = JSON.parse(localData);
    }
    students.push(student);
    localStorage.setItem('angularCurd', JSON.stringify(students));
  }

  editStudent(updatedStudent: Student) {
    const localData = localStorage.getItem('angularCurd');
    if (localData) {
      let students = JSON.parse(localData);

      const index = students.findIndex(
        (student: Student) => student.email === updatedStudent.email
      );

      if (index !== -1) {
        students[index] = updatedStudent;
        localStorage.setItem('angularCurd', JSON.stringify(students));
      }
    }
  }
}
