import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlandetailPage } from './plandetail.page';

const routes: Routes = [
  {
    path: '',
    component: PlandetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlandetailPageRoutingModule {}
