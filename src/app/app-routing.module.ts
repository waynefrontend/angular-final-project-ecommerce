import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent
      },
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      }
    ]
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