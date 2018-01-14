import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class DataService {

  private itemsPerPage = 15;
  private endpoint = `https://api.punkapi.com/v2/beers`;
  private pageNumber = 1;

  beersToDisplay = new BehaviorSubject<any>('');
  beersToDisplayObservable = this.beersToDisplay.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getBeers() {
    this.pageNumber = 1;
    return this.httpClient.get(`${this.endpoint}?per_page=${this.itemsPerPage}&page=${this.pageNumber}`)
      .map(data => {
        this.beersToDisplay.next(data);
      });
  }

  getMoreBeers() {
    this.pageNumber++;
    return this.httpClient.get(`${this.endpoint}?per_page=${this.itemsPerPage}&page=${this.pageNumber}`)
      .map(data => {
        this.beersToDisplay.next(this.beersToDisplay.getValue().concat(data));
      });
  }

  getSimilarBeer(abv, ibu, ebc, items = 3) {
    const abvMin = Math.floor((abv - 4) >= 0 ? abv - 4 : 0);
    const abvMax = Math.floor((abv + 4) >= 0 ? abv + 4 : 0);
    const ibuMin = Math.floor((ibu - 20) >= 0 ? ibu - 20 : 0);
    const ibuMax = Math.floor((ibu + 20) >= 0 ? ibu + 20 : 0);
    const ebcMin = Math.floor((ebc - 20) >= 0 ? ebc - 20 : 0);
    const ebcMax = Math.floor((ebc + 20) >= 0 ? ebc + 20 : 0);

    return this.httpClient.get(`${this.endpoint}?per_page=${items}&abv_gt=${abvMin}&abv_lt=${abvMax}&ibu_gt=${ibuMin}&ibu_lt=${ibuMax}&ebc_gt=${ebcMin}&ebc_lt=${ebcMax}`);
  }

  getBeer(id) {
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }

  searchQuery(query: string) {
    this.router.navigate(['/search', {name: query}]);
  }

  searchBeer(string: String) {
    return this.httpClient.get(`${this.endpoint}?per_page=${this.itemsPerPage}&beer_name=${string}`)
      .map(data => {
        this.beersToDisplay.next(data);
      });

  }
}
