import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './courses/add-course-page/add-course-page.component';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {path: '', component: CoursesPageComponent},
      {path: 'new', component: AddCoursePageComponent},
      {path: ':id', component: AddCoursePageComponent}
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
