import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageDefaultComponent } from './landing-page/components/landing-page-default/landing-page-default.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
