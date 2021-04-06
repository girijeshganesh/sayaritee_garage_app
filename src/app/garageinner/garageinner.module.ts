import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarageinnerPageRoutingModule } from './garageinner-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { GarageinnerPage } from './garageinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarageinnerPageRoutingModule,
    TranslateModule
  ],
  declarations: [GarageinnerPage]
})
export class GarageinnerPageModule {}
