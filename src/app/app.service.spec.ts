import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

import startProxy from './server.js';
import axios from 'axios';
import {AttackService} from '@services/attack/attack.service';

describe('AttakService med riktigt request', () => {
  let service: AppService;
  let attackService: AttackService;

  let httpClientRef: any;
  let proxy: any;

  beforeAll(() => {
    console.log('Starting proxy', attackService);

    const bed = TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {provide: APP_BASE_HREF, baseHref: 'http://localhost:3000'},
        AppService,
        { provide: HttpClient, useClass: HttpClient}
      ],
      imports: [
        CommonModule, HttpClientModule
      ]
    });

    service = bed.get(AppService);
    httpClientRef = bed.get(HttpClient);

    console.log('Starting proxy');
    // proxy = startProxy();
  });


  afterAll((done) => {
    console.log('Closing proxy', done);
    // proxy.close(done);
    done();
  });

  it('Call back-end via proxy with Axios. ', (done) => {
    axios.get('http://localhost:3000/basen/rest/internal/block/64093994123/blockversion/383639700')
      .then(response => {
        expect(response.data.agoslag).toEqual('AKER');
        done();
      })
      .catch(error => {
        console.log(error);
        expect(true).toBe(false);
        done();
      });
  });

  it('Call back-end with proxy med Angular', (done) => {

    expect(service).toBeTruthy();

    service.fetch().subscribe(_ => {
      expect(_.agoslag).toEqual('AKER');
      done();
    }, error => {
      console.log(error);
      expect(true).toBe(false);
      done();
    });

  });


});
