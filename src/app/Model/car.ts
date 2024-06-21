export class Car{
    carId:number
    carName:string;
    ratePerHour:number;
    ratePerDay:number;
    carImage:string;
    
    constructor(){
        this.carId=0;
        this.carName='';
        this.ratePerHour=0;
        this.ratePerDay=0;
        this.carImage='';

    }

}

export class Booking{
    bookingId:number;
    customerName:string;
    mobileNo:number;
    carId:number;
    carName:string;
    bookingDate:Date;
    rentType:string;
    rentDuration:number;
    noOfCars:number;
   
    
    constructor(){
        this.bookingId=0;        
        this.customerName='';
        this.mobileNo=0;
        this.carId=0;
        this.carName='';
        this.bookingDate=new Date();
        this.rentType='';
        this.rentDuration=0;
        this.noOfCars=0;
        

    }
}