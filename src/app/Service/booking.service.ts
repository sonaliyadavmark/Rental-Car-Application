import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private ser:HttpClient) { }

  getBookingData(){
    return this.ser.get("http://localhost:3000/Bookings")
  }

  registerBookingData(record:any){
    return this.ser.post("http://localhost:3000/Bookings",record)
  }

  deleteBookingData(id:any){
    return this.ser.delete("http://localhost:3000/Bookings/"+id)
  }
}
