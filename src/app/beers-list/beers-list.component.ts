import {Component, ViewChild, OnDestroy} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {DataService} from '../data.service';
import {ModalComponent} from '../modal/modal.component';
import {ActivatedRoute} from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})

export class BeersListComponent implements OnDestroy {
  private params;
  private isShowingSearchResults: Boolean;
  noSearchResults: Boolean = false;
  noItemsLoaded: Boolean = true;
  beers: Object;

  private beersSub: ISubscription;
  private beersObsrv: ISubscription;
  private loadMoreSub: ISubscription;
  private routerSub: ISubscription;

  similarBeers: Object;
  private similarBeersSub: ISubscription;

  @ViewChild(ModalComponent) modalCmp;
  modalBeer: Object;

  constructor(private data: DataService,
              private route: ActivatedRoute,
              private router: Router) {
    this.routerSub = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initiateView();
      }
    });
  }

  initiateView() {
    this.noSearchResults = false;
    this.noItemsLoaded = true;
    this.params = this.route.params['value'];

    if (this.isEmpty(this.params)) {
      this.getBeers();
      this.isShowingSearchResults = false;
    } else {
      this.searchBeers(this.params['name']);
      this.isShowingSearchResults = true;
    }
  }

  getBeers() {
    this.beersSub = this.data.getBeers().subscribe(function () {
      this.beersObsrv = this.data.beersToDisplayObservable.subscribe(beer => this.beers = beer);
      this.noItemsLoaded = false;
    }.bind(this));
  }

  searchBeers(query) {
    this.beersSub = this.data.searchBeer(query).subscribe(function () {
      this.beersObsrv = this.data.beersToDisplayObservable.subscribe(beer => this.beers = beer);
      this.noItemsLoaded = false;
      if (this.beers.length === 0) {
        this.noSearchResults = true;
      }
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
  }

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  ngOnDestroy() {
    this.beersSub.unsubscribe();
    this.beersObsrv.unsubscribe();
    this.routerSub.unsubscribe();
  }

}

