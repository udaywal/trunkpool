import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public lat:Number = 28.431276;
  public long:Number = 77.041501;
  public truckData:any[];
  public setVehicleNumber:String;
  public setLocation:String;
  public iconUrl = 'assets/trunckpool_pin.png';

  public customerName:String;
  public customerEmail:String;

  constructor(
    public appService: AppService, public router: Router
  ) { }

  ngOnInit() {
    this.truckApiData();
  }

  public onChoseLocation(event){
    this.lat = event.coords.lat;
    this.long = event.coords.long;
  }

  public truckApiData () {
    this.appService.truckApiData().subscribe(
      (apiResponse) => {
        if(apiResponse.response === true){
          this.truckData = apiResponse.data
          console.log(this.truckData)
          //this.toastr.success(apiResponse.message)
        } else {
          //this.toastr.error(apiResponse.message)
        }
      }, (err)=> {
        //this.toastr.error('Something went wrong!')
      }
    )
  }  

  public setTruckDetails(vehicleNumber, location) {
    console.log('setTruckDetailsCalled!')
    this.setVehicleNumber = vehicleNumber;
    this.setLocation = location;
  }

  public addBooking() {
    let bookingData = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      setVehicleNumber: this.setVehicleNumber,
      setLocation: this.setLocation
    }
    this.appService.setBookingInfoInLocalStorage(bookingData);
    setTimeout(()=>{
      this.router.navigate(['/booking'])
    }, 2000)
  }

}