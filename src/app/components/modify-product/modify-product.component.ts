import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ProductHttpService } from 'src/app/services/product-http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  constructor(private http: ProductHttpService, private snack: MatSnackBar, private route: ActivatedRoute,) { }

  private sku: string = this.route.snapshot.params['sku'];

  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    sku: new FormControl()
  })

  public waiting: boolean = true;

  ngOnInit(): void {
    this.productForm.get('sku').disable();
    this.http.getOne(this.sku).subscribe(
      res => {
        this.waiting = false;
        this.productForm.setValue(
          {
            sku: this.sku,
            price: res['price'],
            name: res['name']
          }
        )
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.waiting = true;
    this.productForm.get('sku').enable();
    let body = this.productForm.value;
    console.log(this.productForm.value);    
    this.productForm.get('sku').disable();
    this.http.modify(body).subscribe(
      res => {
        this.waiting = false;
        this.openSnackBar('Se ha modificado el producto', 'Vale');
        console.log(res);
      },
      err => {
        this.waiting = false;
        this.openSnackBar('Se ha producido un error', 'Vale');
        console.warn(err);
      },
      () => {
        this.productForm.setValue({
          name: '',
          price: '',
          sku: '',
        });
        console.log('finished');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 3000,
    });
  }

}
