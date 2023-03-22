import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/product/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 constructor(private ps:ProductserviceService,private router:Router){

 }

 ngOnInit(): void{
  // this.setname = localStorage.getItem("uname") || "";
 }

 searchterm :any 
//  setname : any



 search(event:any){
  this.searchterm=event.target.value
  this.ps.search.next(this.searchterm)
 }

 cart(){
  this.router.navigateByUrl("product/cart")
 }


}
