import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HydrationPage } from './hydration.page';

const routes: Routes = [
  {
    path: '',
    component: HydrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HydrationPageRoutingModule {}
