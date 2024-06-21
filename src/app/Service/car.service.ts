import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private myser:HttpClient) { }

  getCarData(){
    return this.myser.get("http://localhost:3000/Car")
  }

  registerCarData(record:any){
    return this.myser.post("http://localhost:3000/Car",record)
  }

  deleteCarData(id:any){
    return this.myser.delete('http://localhost:3000/Car/'+id)
  }
}
