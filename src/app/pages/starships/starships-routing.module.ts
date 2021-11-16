import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipsPage } from './starships.page';

const routes: Routes = [
  {
    path: '',
    component: StarshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipsPageRoutingModule {}
