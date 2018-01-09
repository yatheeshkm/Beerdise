import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  @Output() search = new EventEmitter();

  searchText: String = '';
  readonly minSearchLength: number = 3;

  showResults() {
    if (this.isSearchActive()) {
      this.search.emit(this.searchText);
    }
  }

  isSearchActive() {
    return (this.searchText.length >= this.minSearchLength);
  }

}
