import { Component ,OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  loggedUserObj: any;
  carList:any[]=[];
  locations:any[]=[];

  CarAccessoriessObj:any = {
        "accessoriesId": 0,
        "accessoriesTitle": "",
        "showOnWebsite": false,
        "carId": 0

  }

  carObj:any ={
    "carId": 0,
    "brand": "",
    "name": "",
    "pricingDescription": "",
    "pricing": 0,
    "locationId": 0,
    "registeredOn": "2023-11-29T13:43:01.524Z",
    "imageUrl": "",
    "vehicleNo": "",
    "ownerUserId": 0,
    "ZoomCarAccessoriess": [
    ]
  }

  constructor(private carSrv:CarService){
    const local = localStorage.getItem('zoomUser');
     if (local != null){
      this.loggedUserObj = JSON.parse(local);
      this.carObj.ownerUserId = this.loggedUserObj.userId;
     
     }

  }

  ngOnInit(): void {
    this.getCarsByOwnersId();
    this.getallLocation();
  }
  getCarsByOwnersId(){
    this.carSrv.getallCarByOwnerId(this.loggedUserObj.userId).subscribe((res:any)=>{
      this.carList = res.data;
    })
  }
  getallLocation(){
    this.carSrv.getallLocation().subscribe((res:any)=>{
       this.locations = res.data;
    })
  }
  Add(){
    const obj = JSON.stringify(this.CarAccessoriessObj);
    this.carObj.ZoomCarAccessoriess.push(JSON.parse(obj));
    this.CarAccessoriessObj= {
          "accessoriesId": 0,
          "accessoriesTitle": "",
          "showOnWebsite": false,
          "carId": 0
  
    }

  }
  saveCars(){
    debugger;
    this.carObj.ownerUserId = this.loggedUserObj.userId;
    this.carSrv.addNewCar(this.carObj).subscribe((res:any)=>{
       if(res.result){
        alert("Car Created");
        this.getCarsByOwnersId();
        this.closeCarModal();
        this.carObj ={
          "carId": 0,
          "brand": "",
          "name": "",
          "pricingDescription": "",
          "pricing": 0,
          "locationId": 0,
          "registeredOn": "2023-11-29T13:43:01.524Z",
          "imageUrl": "",
          "vehicleNo": "",
          "ownerUserId": 0,
          "ZoomCarAccessoriess": [
          ]
        }
        
       }else{
        alert(res.message);
       }
    })
  }

  //Car Modal
  openCarModal(){
    const model = document.getElementById('carModal');
    if(model!=null){
      model.style.display='block';
    }
  }
  closeCarModal(){
    const model = document.getElementById('carModal');
    if(model!=null){
      model.style.display='none';
    }
  }

}
