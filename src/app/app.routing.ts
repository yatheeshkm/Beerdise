import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BeersListComponent} from './beers-list/beers-list.component';
import {SingleBeerComponent} from './single-beer/single-beer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BeersListComponent
  },
  {
    path: 'beers',
    component: BeersListComponent
  },
  {
    path: 'search',
    component: BeersListComponent
  },
  {
    path: 'beers/:id',
    component: SingleBeerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
