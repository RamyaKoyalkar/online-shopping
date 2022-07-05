import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'products',component:ProductListComponent},
  { path:'home', component:HomeComponent},
  { path:'details/:id',component:ProductDetailsComponent},
  { path:'add',component:CreateProductComponent},
  { path:'update/:id',component:UpdateProductComponent},
  { path:'register',component:RegisterUserComponent},
  { path:'login',component:LoginUserComponent},
  { path:'logout',component:LogoutUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
