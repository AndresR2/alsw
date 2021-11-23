import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionStarshipsPage } from './descripcion-starships.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionStarshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionStarshipsPageRoutingModule {}
