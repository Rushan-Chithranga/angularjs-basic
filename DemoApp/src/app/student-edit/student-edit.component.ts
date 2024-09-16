import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.dervice';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css',
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.studentForm = this.fb.group({
      id: [this.id, Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.studentService.getStudentById(this.id).subscribe((student) => {
      if (student) {
        this.studentForm.setValue({
          id: student.id,
          name: student.name,
          age: student.age,
          grade: student.grade,
        });
      }
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentService.updateStudent(this.studentForm.value);
      alert('Student updated successfully');
    }
  }
}
