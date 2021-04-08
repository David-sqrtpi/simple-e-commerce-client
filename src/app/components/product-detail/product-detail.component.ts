import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private http: ProductHttpService, private route: ActivatedRoute) { }

  public res=null;

  public waiting:boolean = false;

  private sku:string = this.route.snapshot.params['sku'];

  ngOnInit(): void {
    this.http.getOne(this.sku).subscribe(
      res => {
        this.waiting = false;
        console.log(res);
        res ? this.res = res:null;
      },
      err => {
        this.waiting = false;
        console.log(err);
      },
      () => {        
        console.log('finished');
      }
    );
  }

}
