import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';
import { TranslateModule } from '@ngx-translate/core'; 
import { DocumentsPage } from './documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule,
    TranslateModule
  ],
  declarations: [DocumentsPage]
})
export class DocumentsPageModule {}
