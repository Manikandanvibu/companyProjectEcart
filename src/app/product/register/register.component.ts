import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private router:Router){}

  register(a :any,b : any){
    localStorage.setItem("uname",a.value);
    localStorage.setItem("pass",b.value);
    alert("Registration successfull")
    this.router.navigateByUrl("product/login")

  }

}
