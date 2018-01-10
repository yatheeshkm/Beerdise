import {Component, Output, EventEmitter} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  @Output() search = new EventEmitter();

  searchText: String = '';
  readonly minSearchLength: number = 3;

  constructor(private data: DataService) {}

  showResults() {
    if (this.isSearchActive()) {
      this.data.searchBeer(this.searchText);
    }
  }

  isSearchActive() {
    return (this.searchText.length >= this.minSearchLength);
  }

}
