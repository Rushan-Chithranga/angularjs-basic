import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { StudentListComponent } from '../app/student-list/student-list.component';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NavbarComponent,
    StudentListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DemoApp';


  ngOnInit(): void {
    initFlowbite();
  }
}



