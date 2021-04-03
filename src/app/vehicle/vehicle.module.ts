import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclePageRoutingModule } from './vehicle-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { VehiclePage } from './vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclePageRoutingModule,
    TranslateModule
  ],
  declarations: [VehiclePage]
})
export class VehiclePageModule {}
