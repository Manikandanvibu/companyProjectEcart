import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
                        { path: '', component: ViewAllProductComponent },
                        { path: 'view-product/:id', component: ViewProductComponent },
                        { path: 'edit-product/:id', component: EditProductComponent },
                        { path: 'delete-product/:id', component: DeleteProductComponent },
                        { path: 'add-product', component: AddProductComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'register', component: RegisterComponent },
                        { path: 'cart', component: CartComponent }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
