import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarageinnerPage } from './garageinner.page';

const routes: Routes = [
  {
    path: '',
    component: GarageinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarageinnerPageRoutingModule {}
