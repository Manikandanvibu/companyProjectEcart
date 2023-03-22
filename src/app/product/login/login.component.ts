import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router:Router){}

  username=""
  password=""
  usernamecheck=""
  passwordcheck=""
  manager:any
  
  login(a : any , b : any){

    var username = a.value;
    var password = b.value;

    var usernamecheck = localStorage.getItem("uname");
    var passwordcheck = localStorage.getItem("pass");


    this.manager={superadmin:123,admin:123}

    if(username in this.manager){
      if(password == this.manager[username]){
        alert(`${username} login successfull`)
        this.router.navigateByUrl('');    

      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      if(username == usernamecheck){
        if(password == passwordcheck){
          alert("Login Successfull")
          this.router.navigateByUrl('')

        }
        else{
          alert("Incorrect Password")
        }
      }
      else{
        alert("Incorrect Username")
      }
    }
  }

}
