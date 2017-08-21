import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Formdemo1Component } from './formdemo1/formdemo1.component';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/formdemo1',
    pathMatch: 'full'
  },
  {
    path: 'formdemo1',
    component: Formdemo1Component
  },
  {
    path: 'regform',
    component: RegFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
