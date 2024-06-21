import { Component, OnInit } from '@angular/core';
import { Booking, Car } from 'src/app/Model/car';
import { BookingService } from 'src/app/Service/booking.service';
import { CarService } from 'src/app/Service/car.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  isSidePanelVisible:boolean=false;
  BookingDetails:any;
  // carData: Car=new Car()
  BookingData:Booking=new Booking();
  carDetails: any;
  // BookingList:Booking[]=[];

  constructor(private bookser:BookingService, private carser:CarService){

  }

  ngOnInit(): void {
          
    this.carser.getCarData().subscribe((info)=>{
      this.carDetails=info
  },(err)=>{
    alert("Something gets Wrong")
  })


    this.bookser.getBookingData().subscribe((details)=>{
           this.BookingDetails=details;
    },(err)=>{
      alert("Something gets Wrong")
    })
  }

  onBookingReset(){
  this.BookingData=new Booking();
  }

  onBookingSave(){
   this.bookser.registerBookingData(this.BookingData).subscribe((data)=>{
    console.log(data);
    alert("Booking  Successful");
   },(err)=>{
    alert("Something Gets Wrong")
   })
  }
  
  onDeleteBookCar(bid:any){
    alert(bid);
    this.bookser.deleteBookingData(bid).subscribe((data)=>{
      alert("Car Data Deleted Successfully")
    })
    this.bookser.getBookingData().subscribe((details)=>{
      this.BookingDetails=details;
  })
  }

}
