import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-similar-beer',
  templateUrl: './similar-beer.component.html',
  styleUrls: ['./similar-beer.component.scss']
})
export class SimilarBeerComponent {

  @Input() beer: Object;
  imageIsLoading = true;

  onLoad() {
    this.imageIsLoading = false;
  }
}
