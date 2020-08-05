import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AttackService} from '@services/attack/attack.service';

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient, private as: AttackService) { }

  fetch(): Observable<any> {
    console.log(this.as.hello());
    return this.httpClient.get(
      'http://localhost:3000/basen/rest/internal/block/64093994123/blockversion/383639700',
      {
        headers: {'x-userid':'dsin'}
     });
  }

}
