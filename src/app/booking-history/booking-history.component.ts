import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  public bookingData:any;

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit() {
    this.bookingData = this.appService.getBookingInfoFromLocalstorage();
  }

}
