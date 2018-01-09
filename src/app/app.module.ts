import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import {NgbModalBackdrop} from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import {NgbModalWindow} from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
    NgbModalBackdrop,
    NgbModalWindow,
    SimilarBeerComponent,
    BeersListComponent,
    SingleBeerComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    NgbModal,
    NgbModalStack,
    NgbActiveModal
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    NgbModalBackdrop,
    NgbModalWindow
  ]
})
export class AppModule {
}
