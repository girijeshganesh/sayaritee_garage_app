import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlandetailPageRoutingModule } from './plandetail-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { PlandetailPage } from './plandetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlandetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [PlandetailPage]
})
export class PlandetailPageModule {}
