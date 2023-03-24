import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private router:Router,private ps:ProductserviceService){}

  register(a :any,b : any){
    var uname = a.value;
    var psw = b.value;

    this.ps.register(uname,psw).subscribe((result:any) => {
      alert(result.message)
      this.router.navigateByUrl('product/login')
    },
    // this result is to take the error case if same user registering
    result=>{
      alert(result.error.message)
      this.router.navigateByUrl('product/login')
    }
    )
  }

  }