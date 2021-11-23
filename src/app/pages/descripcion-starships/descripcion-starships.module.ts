import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionStarshipsPageRoutingModule } from './descripcion-starships-routing.module';

import { DescripcionStarshipsPage } from './descripcion-starships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionStarshipsPageRoutingModule
  ],
  declarations: [DescripcionStarshipsPage]
})
export class DescripcionStarshipsPageModule {}
