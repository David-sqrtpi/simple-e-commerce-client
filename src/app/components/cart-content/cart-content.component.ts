import { Component, OnInit } from '@angular/core';
import { CartHttpService } from 'src/app/services/cart-http.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  columnsToDisplay = ['product', 'quantity', 'subtotal'];

  public response:object = null;

  constructor(private http:CartHttpService) { }

  ngOnInit(): void {
    this.http.get('placeholder').subscribe(
      res => {
        console.log(res);
        this.response = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
