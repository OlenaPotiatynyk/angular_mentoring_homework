import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddAndEditCoursePageComponent } from './courses/add-and-edit-course-page/add-and-edit-course-page.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'courses',
    data: { breadcrumb: 'Courses'},
    canActivate: [AuthGuard],
    children: [
      {path: '', component: CoursesPageComponent, data: { breadcrumb: null }},
      {path: 'new', component: AddAndEditCoursePageComponent, data: { breadcrumb: 'New' }},
      {path: ':id', component: AddAndEditCoursePageComponent, data: { breadcrumb: 'ID' }}
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
    component: PageNotFoundComponent,
    data: { breadcrumb: 'Page not found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
