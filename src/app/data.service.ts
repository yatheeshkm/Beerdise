import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  private endpoint = 'https://api.punkapi.com/v2/beers';

  getBeers() {
    return this.httpClient.get(this.endpoint);
  }

  getSimilarBeer(abv, ibu, ebc, items = 3) {
    const abvMin = Math.floor((abv - 4) >= 0 ? abv - 4 : 0);
    const abvMax = Math.floor((abv + 4) >= 0 ? abv + 4 : 0);
    const ibuMin = Math.floor((ibu - 20) >= 0 ? ibu - 20 : 0);
    const ibuMax = Math.floor((ibu + 20) >= 0 ? ibu + 20 : 0);
    const ebcMin = Math.floor((ebc - 20) >= 0 ? ebc - 20 : 0);
    const ebcMax = Math.floor((ebc + 20) >= 0 ? ebc + 20 : 0);
    const length = Math.floor(items > 0 ? items : 1);

    console.log(`${this.endpoint}?abv_gt=${abvMin}&abv_lt=${abvMax}&ibu_gt=${ibuMin}&ibu_lt=${ibuMax}&ebc_gt=${ebcMin}&ebc_lt=${ebcMax}&per_page=${length}`);
    return this.httpClient.get(`${this.endpoint}?abv_gt=${abvMin}&abv_lt=${abvMax}&ibu_gt=${ibuMin}&ibu_lt=${ibuMax}&ebc_gt=${ebcMin}&ebc_lt=${ebcMax}&per_page=${length}`);
  }
}
