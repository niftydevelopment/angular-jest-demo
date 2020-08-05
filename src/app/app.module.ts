import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import {AttackModule} from '@services/attack/attack.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AttackModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
