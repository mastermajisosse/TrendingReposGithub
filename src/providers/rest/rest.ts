import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private url = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";

  constructor(public http: HttpClient) {
    
  }

  getRepos(page): Observable<string[]> {
    // if(page = ){

    // }
    var api_mission = this.url + "&page=" + page;
    return this.http.get(api_mission);
  }


}
