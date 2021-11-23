import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionPlanetsPage } from './descripcion-planets.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionPlanetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionPlanetsPageRoutingModule {}
