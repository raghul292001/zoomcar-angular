import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarsComponent } from './components/cars/cars.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardCardComponent } from './reusableComponents/card-card/card-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingComponent,
    CarsComponent,
    CardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
