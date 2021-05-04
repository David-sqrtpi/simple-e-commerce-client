import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartHttpService } from 'src/app/services/cart-http.service';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router:Router, private http: ProductHttpService,private route: ActivatedRoute, private httpCart:CartHttpService) { }

  public res=null;
  public waiting:boolean = true;
  private sku:string = this.route.snapshot.params['sku'];
  private itemCount:number = +localStorage.getItem('itemCount');

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

  addItem(sku:string) {
    this.waiting = true;
    this.httpCart.addItem(sku).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('itemCount', (++this.itemCount).toString());
        this.router.navigate(['./cart']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
