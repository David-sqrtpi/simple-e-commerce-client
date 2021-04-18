import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartContentComponent } from './components/cart-content/cart-content.component';
import { FindComponent } from './components/find/find.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path:"products", component:ProductComponent},
  { path:"products/:sku", component:ProductDetailComponent},
  { path:"products/:sku/modify", component:ModifyProductComponent},
  { path:"add", component:ProductFormComponent},
  { path:"find", component:FindComponent},
  { path:"cart", component:CartContentComponent},
  { path:"**", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }