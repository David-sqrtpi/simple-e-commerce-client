import { Component, OnInit } from '@angular/core';
import { CartHttpService } from 'src/app/services/cart-http.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  public response = null;

  constructor(private http:CartHttpService) { }

  ngOnInit(): void {
    this.http.getAll().subscribe(
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
