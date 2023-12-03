import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  carId:string ='';
  locationId:string ='';
  filteredCar:any;
  bookingObj :any = {
    "bookingId": 0,
    "customerId": 0,
    "fromLocationId": 0,
    "toLocationId": 0,
    "travelDate": "",
    "startTime": "",
    "carId": 0,
    "pickupAddress": "",
    "alternateContactNo": "",
    "invoiceNo": "yes",
    "isComplete": true
  };
  locations:any[]=[];
  loggedUserObj: any;

  constructor(private activateRoute:ActivatedRoute,private carsrv :CarService) {
    this.getAllLocation();
    this.activateRoute.params.subscribe((res:any)=>{
      this.carId = res.carId;
      this.locationId = res.locationId;
      this.GetCarById();
      this.bookingObj.carId = this.carId;
    })
    const local = localStorage.getItem('zoomUser');
    if (local != null){
     this.loggedUserObj = JSON.parse(local);
     this.bookingObj.customerId = this.loggedUserObj.userId;
    }
  }

  ngOnInit(): void {
  
  }

  GetCarById(){
    this.carsrv.GetCarById(this.carId).subscribe((res:any)=>{
      this.filteredCar = res.data;
    })
  }

  getAllLocation(){
    this.carsrv.getallLocation().subscribe((res:any)=>{
     this.locations = res.data;
    })
  }

  createBooking(){
    this.carsrv.createNewBooking(this.bookingObj).subscribe((res:any)=>{
      if(res.result){
        alert("Booked Successfully");
        console.log(res.data);
      } else {
        alert(res.message);
      }
    })
  }


}
