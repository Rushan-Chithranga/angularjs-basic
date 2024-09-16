import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 18, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 19, grade: 'B' }
  ];

  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentById(id: number): Observable<Student | undefined> {
    return of(this.students.find(s => s.id === id));
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  updateStudent(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
  }
}
