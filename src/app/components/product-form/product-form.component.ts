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

  public waiting:boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.waiting = true;
    console.log(this.productForm.value);
    let body = this.productForm.value;
    this.http.save(body).subscribe(
      res=>{
        this.waiting = false;
        console.log(res);
      },
      err => {
        this.waiting = false;
        console.warn(err);
      },
      () => {
        console.log('finished');
      }
    );
  }

}
