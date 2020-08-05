import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) { }

  fetch(): Observable<any> {
    return this.httpClient.get(
      'http://localhost:3000/basen/rest/internal/block/64093994123/blockversion/383639700',
      {
        headers: {'x-userid':'dsin'}
     });
  }

}
