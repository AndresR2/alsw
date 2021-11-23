import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionPlanetsPageRoutingModule } from './descripcion-planets-routing.module';

import { DescripcionPlanetsPage } from './descripcion-planets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionPlanetsPageRoutingModule
  ],
  declarations: [DescripcionPlanetsPage]
})
export class DescripcionPlanetsPageModule {}
