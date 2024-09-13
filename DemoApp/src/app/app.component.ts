import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { StudentAddComponent } from '../app/student-add/student-add.component';
import { StudentListComponent } from '../app/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    StudentAddComponent,
    StudentListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DemoApp';
}

