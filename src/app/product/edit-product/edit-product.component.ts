import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productid:any
  productdata:any
  
  constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router){}

  ngOnInit(): void{
    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"]
    })

    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
    })
  }

  updateproduct(form:any){
    let updateproduct={
      id : form.value.id,
      productName : form.value.productName,
      categoryId : form.value.categoryId,
      description : form.value.description,
      price : form.value.price,
      is_available : form.value.is_available,
      productImg : form.value.productImg,
      rating : form.value.rating,
      discount : form.value.discount,
      review : form.value.review,
      vendor_name : form.value.vendor_name,
      warranty : form.value.warranty
    }

    this.ps.editProduct(this.productid,this.productdata)
    .subscribe((data:any)=>{
      alert('updated product details')
      this.router.navigateByUrl("product")
    })
  }
}
