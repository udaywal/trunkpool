import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppService } from './app.service';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtLMY7kduXEJJR3HL-WvJcG7jmfefLw-Y'
    }),
    RouterModule.forRoot([
      { path: '', component: DashboardComponent},
      { path: 'booking', component: BookingHistoryComponent},
      { path: '*', redirectTo: ''},
      { path: '**', redirectTo: ''}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }