import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.dervice';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
    this.students = this.students.filter(student => student.id !== id);
  }
}
