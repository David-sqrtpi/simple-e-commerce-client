import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FindComponent } from './components/find/find.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path:"products", component:ProductComponent},
  { path:"products/:sku", component:ProductDetailComponent},
  { path:"add-product", component:ProductFormComponent},
  { path:"find", component:FindComponent},
  { path:"**", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }