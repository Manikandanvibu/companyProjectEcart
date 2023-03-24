import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router:Router,private ps : ProductserviceService){}



  ngOnInit() : void {
    
  }
  
  login(a : any , b : any){

    var acno = a.value;
    var psw = b.value;

    this.ps.login(acno,psw).subscribe((result:any)=>{
      localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
      
      alert(result.message)
      this.router.navigateByUrl('product/login')
    },
    result=>{
      alert(result.error.message)
    })
  }

  

}