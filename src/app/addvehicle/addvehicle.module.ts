import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvehiclePageRoutingModule } from './addvehicle-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { AddvehiclePage } from './addvehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvehiclePageRoutingModule,
    TranslateModule
  ],
  declarations: [AddvehiclePage]
})
export class AddvehiclePageModule {}
