import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.dervice';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value);
      alert('Student added successfully');
    }
  }
}
