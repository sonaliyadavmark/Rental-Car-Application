import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Model/car';
import { CarService } from 'src/app/Service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carDetails: any;
  carData: Car = new Car();
  carList: Car[] = [];
  isSidePanelVisible: boolean = false;
  constructor(private carser: CarService) {}

  ngOnInit(): void {
    this.carser.getCarData().subscribe(
      (info) => {
        this.carDetails = info;
      },
      (err) => {
        alert('Something gets Wrong');
      }
    );
  }
  onReset() {
    this.carData = new Car();
  }

  onSaveCar(carData: any) {
    this.carser.registerCarData(this.carData).subscribe(
      (add) => {
        console.log(add);
        alert('Car data Saved Successfully');
      },
      (err) => {
        alert('Something Wrong');
      });
      this.carser.getCarData().subscribe(
        (info) => {
          this.carDetails = info;
        })

    
  
  }

  onDeleteCar(carId:any){
    alert(carId);
    this.carser.deleteCarData(carId).subscribe((data)=>{
      alert("Car Data Deleted Successfully")
    })
    this.carser.getCarData().subscribe(
      (info) => {
        this.carDetails = info;
      })

  }
}
