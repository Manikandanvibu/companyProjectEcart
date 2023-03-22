import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor (private http:HttpClient,) { }

  // http request view all products
  viewAllProducts(){
    return this.http.get("https://project-data.onrender.com/products")
  }

  addProduct(ProductData:any){
    return this.http.post('https://project-data.onrender.com/products',ProductData)
  }

  // api call to get single product data
  viewproduct(id:any){
    return this.http.get('https://project-data.onrender.com/products/'+id)
    
  }
  deleteproduct(id:any){
    return this.http.delete('https://project-data.onrender.com/products/'+id)
  }
  editProduct(id:any,data:any){
    return this.http.put('https://project-data.onrender.com/products/'+id,data)
  }

  // editproduct(productid:any,productData:any){

  // }
  addtocarts(id :any){
    return this.http.get('https://project-data.onrender.com/products/'+id)
  }


}
