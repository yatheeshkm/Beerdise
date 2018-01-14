import {Component, ViewChild} from '@angular/core';
import {BeersListComponent} from './beers-list/beers-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(BeersListComponent) beersList: BeersListComponent;

  constructor() {
  }


/*
  goHome() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
    if (currentUrl === '/') {
      this.data.getBeers();
    } else {
      this.router.navigate(['']);
    }

  }
*/
}
