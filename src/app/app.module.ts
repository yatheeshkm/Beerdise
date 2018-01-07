import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import {NgbModalBackdrop} from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import {NgbModalWindow} from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ModalComponent} from './modal/modal.component';
import {GridItemComponent} from './grid-item/grid-item.component';
import { SimilarBeerComponent } from './modal/similar-beer/similar-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    GridItemComponent,
    ModalComponent,
    NgbModalBackdrop,
    NgbModalWindow,
    SimilarBeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
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
