import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';

import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  //Default path redirects to login page
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }
  //Path not found page
  //{ code go here }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }