import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionPeoplePage } from './descripcion-people.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionPeoplePageRoutingModule {}
