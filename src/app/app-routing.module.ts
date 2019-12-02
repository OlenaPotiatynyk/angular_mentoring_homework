import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddAndEditCoursePageComponent } from './courses/add-and-edit-course-page/add-and-edit-course-page.component';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {path: '', component: CoursesPageComponent},
      {path: 'new', component: AddAndEditCoursePageComponent},
      {path: ':id', component: AddAndEditCoursePageComponent}
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
