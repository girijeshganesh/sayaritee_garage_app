import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core'; 
import { WorkorderPageRoutingModule } from './workorder-routing.module';

import { WorkorderPage } from './workorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkorderPageRoutingModule,
    TranslateModule
  ],
  declarations: [WorkorderPage]
})
export class WorkorderPageModule {}
