import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  studentObj: Student = {
    name: '',
    mobileNo: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    address: '',
  };

  studentsList: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentsList = this.studentService.getStudents();
  }

  saveStudent() {
    this.studentService.saveStudent(this.studentObj);
    this.studentsList = this.studentService.getStudents();
    this.resetForm();
  }
  onEdit(item: Student) {
    this.studentObj = { ...item };
  }

  editStudent() {
    if (this.studentObj) {
      this.studentService.editStudent(this.studentObj);
      this.studentsList = this.studentService.getStudents();
      this.resetForm();
    }
  }

  resetForm() {
    this.studentObj = {
      name: '',
      mobileNo: '',
      email: '',
      city: '',
      state: '',
      pincode: '',
      address: '',
    };
  }
}
