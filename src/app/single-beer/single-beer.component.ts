import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.scss']
})
export class SingleBeerComponent implements OnInit, OnDestroy {

  private id: number;
  private beerSub: ISubscription;
  beer: Object;

  constructor(private route: ActivatedRoute,
              private data: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.beerSub = this.data.getBeer(this.id).subscribe(data => this.beer = data[0]);
  }

  ngOnDestroy() {
    this.beerSub.unsubscribe();
  }

}
