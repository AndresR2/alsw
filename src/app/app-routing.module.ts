import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'planets/:id',
    loadChildren: () => import('./pages/descripcion-planets/descripcion-planets.module').then( m => m.DescripcionPlanetsPageModule)
  },
  {
    path: 'people/:id',
    loadChildren: () => import('./pages/descripcion-people/descripcion-people.module').then( m => m.DescripcionPeoplePageModule)
  },
  {
    path: 'starships/:id',
    loadChildren: () => import('./pages/descripcion-starships/descripcion-starships.module').then( m => m.DescripcionStarshipsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
