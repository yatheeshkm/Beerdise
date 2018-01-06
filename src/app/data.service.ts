import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getBeers() {
    return this.httpClient.get('https://api.punkapi.com/v2/beers');
  }
}
