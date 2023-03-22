import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public productid : any
  public products : any = [] ;
  public display : any = 1

  constructor(private ps:ProductserviceService,private router:Router){}

  ngOnInit(): void {
      this.productid = localStorage.getItem("cart")
      this.ps.addtocarts(this.productid).subscribe((item : any) => {
        this.products.push(item) 
        this.display = 2
      })
  }

  buynow(){
    alert("your product ordered successfully") 
    this.router.navigateByUrl("")
  }


  removeItem(){
    this.products = []
    console.log(this.products.length);
    
    localStorage.removeItem("cart")
    this.display = 1
  }

}
