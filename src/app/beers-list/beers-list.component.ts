import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {DataService} from '../data.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit, OnDestroy {
  beers: Object;
  private beersSub: ISubscription;
  private beersObsrv: ISubscription;
  private loadMoreSub: ISubscription;
  private isShowingSearchResults: Boolean;

  similarBeers: Object;
  private similarBeersSub: ISubscription;

  @ViewChild(ModalComponent) modalCmp;
  modalBeer: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.isShowingSearchResults = false;
    this.beersSub = this.data.getBeers().subscribe(function () {
      this.beersObsrv = this.data.beersToDisplayObservable.subscribe(beer => this.beers = beer);
    }.bind(this));
  }

  showModal(item) {
    this.modalBeer = item;
    this.getSimilarBeer(item.abv, item.ibu, item.ebc, 3);
    this.modalCmp.open();
  }

  getSimilarBeer(abv, ibu, ebc, items) {
    this.similarBeers = [];
    this.similarBeersSub = this.data.getSimilarBeer(abv, ibu, ebc, items).subscribe(data => this.similarBeers = data);
  }

  loadMore() {
    if (!this.isShowingSearchResults) {
      this.loadMoreSub = this.data.getMoreBeers().subscribe(function () {
        this.beersObsrv = this.data.beersToDisplayObservable.subscribe(beer => this.beers = beer);
      }.bind(this));
    }
    this.isShowingSearchResults = true;
  }

  ngOnDestroy() {
    this.beersSub.unsubscribe();
    this.beersObsrv.unsubscribe();
    this.loadMoreSub.unsubscribe();
  }

}
