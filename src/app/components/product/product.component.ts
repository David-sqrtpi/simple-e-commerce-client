import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private http: ProductHttpService) { }

  public res=null;

  public waiting:boolean = false;

  ngOnInit(): void {
    this.waiting=true;
    this.http.getAll().subscribe(
      res => {
        console.log(res);
        this.res = res[0]["name"];
      },
      err => {
        this.waiting=false;
        console.log(err);
        this.res = err.name;
      },
      () => {
        this.waiting=false;
        this.res ? 'No hay productos':null;
        console.log('finished');
      }
    )
  }

}
