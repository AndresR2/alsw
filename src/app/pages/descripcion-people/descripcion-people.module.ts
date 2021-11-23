import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionPeoplePageRoutingModule } from './descripcion-people-routing.module';

import { DescripcionPeoplePage } from './descripcion-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionPeoplePageRoutingModule
  ],
  declarations: [DescripcionPeoplePage]
})
export class DescripcionPeoplePageModule {}
