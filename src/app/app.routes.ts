import { Routes } from '@angular/router';
import {FindCourseComponent} from "./components/find-course/find-course.component";
import {UpdateCourseComponent} from "./components/update-course/update-course.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {DeleteCourseComponent} from "./components/delete-course/delete-course.component";

export const routes: Routes = [
  {path: 'courses', component: FindCourseComponent},
  {path: 'courses/:id/edit', component:UpdateCourseComponent},
  {path: 'addcourse',component:AddCourseComponent},
  {path: 'deletecourse/:id',component:DeleteCourseComponent}
];
