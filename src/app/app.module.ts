import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppComponent} from './app.component';
import {ModalComponent} from './modal/modal.component';
import {GridItemComponent} from './beers-list/grid-item/grid-item.component';
import {SimilarBeerComponent} from './modal/similar-beer/similar-beer.component';
import {BeersListComponent} from './beers-list/beers-list.component';
import {SingleBeerComponent} from './single-beer/single-beer.component';
import {SearchFormComponent} from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GridItemComponent,
    ModalComponent,
    SimilarBeerComponent,
    BeersListComponent,
    SingleBeerComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    NgbModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: []
})
export class AppModule {
}
