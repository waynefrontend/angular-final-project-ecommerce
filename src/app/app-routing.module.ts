import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }