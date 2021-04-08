import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private http: ProductHttpService) { }

  public rest=null;

  public waiting:boolean = false;

  ngOnInit(): void {
    this.waiting=true;
    this.http.getAll().subscribe(
      res => {
        this.waiting = false;
        console.log(res);
        this.rest = res;
      },
      err => {
        this.waiting=false;
        console.log(err);
        this.rest = err.name;
      },
      () => {
        this.rest ? 'No hay productos':null;
        console.log('finished');
      }
    );
  }

}
