import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URI_API = 'http://localhost:8080/carts/'

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {

  constructor(private http:HttpClient) { }

  get(uuid:string) {
    return this.http.get(URI_API+'UUID');
  }

  getAll() {
    return this.http.get(URI_API);
  }

  addItem(sku:string) {
    return this.http.post(URI_API+'UUID?productSku='+sku+'&productQuantity=1', null)
  }
}
