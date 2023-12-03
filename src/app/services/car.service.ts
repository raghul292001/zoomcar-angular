import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiEndPoint:string='https://freeapi.miniprojectideas.com/api/ZoomCar/';
  constructor(private http:HttpClient) {

   }
  registerUser(obj:any){
   return this.http.post(this.apiEndPoint + 'AddNewUser',obj);
  }
  loginUser(obj:any){
  return  this.http.post(this.apiEndPoint+'Login',obj);
  }
  //https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllCarsByOwnerId
  getallCarByOwnerId(userId:number){
    return this.http.get(this.apiEndPoint+'GetAllCarsByOwnerId?id='+userId);
  }
  getallLocation(){
    return this.http.get(this.apiEndPoint+'GetAllLocations');
  }
  addNewCar(obj:any){
    return this.http.post(this.apiEndPoint+'addNewCar',obj);
  }
  getAllCars(){
    return this.http.get(this.apiEndPoint+'GetAllCars');
  }
  GetAllCarsByLocation(locationId:string){
    return this.http.get(this.apiEndPoint+'GetAllCarsByLocation?id='+locationId);
  }
  GetCarById(carId:string){
    return this.http.get(this.apiEndPoint+'GetCarById?id='+carId);
  }
  createNewBooking(obj:any){
    return this.http.post(this.apiEndPoint+'createNewBooking',obj);
  }

}
