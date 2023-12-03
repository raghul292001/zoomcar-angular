import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoomcar';

  registerObj :any = {
    "userId": 0,
    "name": "",
    "userRole": "",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  }
  loginObj :any = {
    "userId": 0,
    "name": "111",
    "userRole": "111",
    "emailId": "",
    "mobileNo": "111",
    "password": "",
    "createdOn": new Date()
  }
  loggedUserObj:any;
  constructor(private carSrv: CarService){
     const local = localStorage.getItem('zoomUser');
     if (local != null){
      this.loggedUserObj = JSON.parse(local);
     }
  }

  onRegister(){
    this.carSrv.registerUser(this.registerObj).subscribe((res:any)=>{
    if(res.result){
      alert('Registration Success');
      this.closeRegister();
      this.loggedUserObj = res.data;
    }else{
      alert(res.message);
    }
    })
  }
  onLogin(){
    this.carSrv.loginUser(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login Success');
        localStorage.setItem('zoomUser',JSON.stringify(res.data));
        this.loggedUserObj = res.data;
        this.closeLogin();
      }else{
        alert(res.message);
      }
    })

  }
  logOff(){
    localStorage.removeItem('zoomUser');
    this.loggedUserObj = undefined;
    alert('Logout Successfully');
  }
    //Modal Popup for registration
  openRegister(){
    const model = document.getElementById('registerModal');
    if(model != null){
      model.style.display = 'block';
    }
  }
  closeRegister(){
    const model = document.getElementById('registerModal');
    if(model != null){
      model.style.display = 'none';
    }
  }
  //Modal popup for login
  openLogin(){
    const model = document.getElementById('loginModal');
    if (model != null){
      model.style.display='block';
    }
  }
  closeLogin(){
    const model = document.getElementById('loginModal');
    if (model != null){
      model.style.display='none';
    }
  }
}
