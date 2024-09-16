import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { NgModule } from '@angular/core';
import { StudentEditComponent } from './student-edit/student-edit.component';

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
