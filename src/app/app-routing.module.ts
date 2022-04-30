import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CalcComponent} from "./calc/calc.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {TodoComponent} from "./todo/todo.component";
import {CoursesComponent} from "./courses/courses.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {LoginComponent} from "./login/login.component";
import {NewCourseComponent} from "./new-course/new-course.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {EditCourseComponent} from "./edit-course/edit-course.component";
import {UserGuard} from "./user.guard";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'calc', component: CalcComponent},
  {path:'todo', component: TodoComponent},
  {path:'courses', component: CoursesComponent, canActivate: [UserGuard]},
  {path:'courses/new', component: NewCourseComponent, canActivate: [UserGuard]},
  {path:'courses/:id', component: CourseDetailComponent, canActivate: [UserGuard]},
  {path:'courses/:id/edit', component: EditCourseComponent, canActivate: [UserGuard]},
  {path:'teachers', component: TeachersComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
