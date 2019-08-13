import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FoodsComponent } from './foods/foods.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FoodsInMemoryDataService } from './foods-in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  FoodsInMemoryDataService, { dataEncapsulation: false }
),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
