import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaragePageRoutingModule } from './garage-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { GaragePage } from './garage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaragePageRoutingModule,
    TranslateModule
  ],
  declarations: [GaragePage]
})
export class GaragePageModule {}
