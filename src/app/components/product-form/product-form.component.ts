import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private http:ProductHttpService) { }

  productForm = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    sku : new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productForm.value);
    
  }

}
