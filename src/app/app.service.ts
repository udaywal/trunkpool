import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public url = 'https://staging.trunkpool.com/api/v1/vehicle/dummy/data';

  constructor(public http:HttpClient) { }

  public truckApiData ():Observable<any> {
    return this.http.get(`${this.url}`)
  }

  public setBookingInfoInLocalStorage = (bookingData) =>{
    localStorage.setItem(`bookingData`, JSON.stringify(bookingData))
  };

  public getBookingInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem(`bookingData`));
  };

}