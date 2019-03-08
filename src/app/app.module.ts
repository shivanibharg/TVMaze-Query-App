import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryShowDetailsComponent } from './query-show-details/query-show-details.component';
import { QueryShowService } from './query-show.service';
import {HttpClientModule} from '@angular/common/http';//to make https call from ShowService


@NgModule({
  declarations: [
    AppComponent,
    QueryShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QueryShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
