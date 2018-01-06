import {Component, OnInit, ViewChild} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {DataService} from './data.service';
import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  beers: Object;
  private beersSub: ISubscription;

  @ViewChild(ModalComponent) modalCmp;
  modalBeer: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.beersSub = this.data.getBeers().subscribe(data => {
      this.beers = data;
    });

    console.log(this.beers);
  }

  showModal(item) {
    this.modalBeer = item;
    this.modalCmp.open();
  }

}
