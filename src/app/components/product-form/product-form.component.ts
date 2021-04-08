import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ProductHttpService } from 'src/app/services/product-http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private http:ProductHttpService, private snack:MatSnackBar) { }

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
        this.openSnackBar('Se ha guardado el producto', 'Vale');
        console.log(res);
      },
      err => {
        this.waiting = false;
        this.openSnackBar('Se ha producido un error', 'Vale');
        console.warn(err);
      },
      () => {
        this.productForm.setValue({
          name:'',
          price:'',
          sku:'',
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
