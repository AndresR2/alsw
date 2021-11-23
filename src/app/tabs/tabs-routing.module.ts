import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'planets',
        loadChildren: () => import('../pages/planets/planets.module').then(m => m.PlanetsPageModule)
      },
      {
        path: 'people',
        loadChildren: () => import('../pages/people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: 'starships',
        loadChildren: () => import('../pages/starships/starships.module').then(m => m.StarshipsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/planets',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
