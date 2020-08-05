import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {AttackService} from '@services/attack/attack.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  hello = '';

  data$: Observable<any>;

  constructor(private appService: AppService, private attackService: AttackService) {
    this.data$ = appService.fetch();
    this.hello = attackService.hello();
  }


}
