import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locationId:string = "";
  locations:any[]=[];
  fromLocation: string = "";
  toLocation:string = "";
  availableCars:any[]=[];
  constructor(private carsrv:CarService,private activateRoute:ActivatedRoute,private router:Router){
    this.activateRoute.params.subscribe((res:any)=>{
      this.locationId = res.locationId;
      this.fromLocation = this.locationId;
      this.GetAllCarsByLocation();
    })
  }
  ngOnInit(): void {
    this.getAllLocation();
  }
  getAllLocation(){
    this.carsrv.getallLocation().subscribe((res:any)=>{
     this.locations = res.data;
    })
  }
  GetAllCarsByLocation(){
     this.carsrv.GetAllCarsByLocation(this.locationId).subscribe((res:any)=>{
      this.availableCars = res.data;
     }) 
  }
  locationChange(){
    this.carsrv.GetAllCarsByLocation(this.fromLocation).subscribe((res:any)=>{
      this.availableCars = res.data;
     }) 
  }
  makeBooking(carId:number){
    this.router.navigate(['/booking',this.fromLocation,carId])

  }

}
