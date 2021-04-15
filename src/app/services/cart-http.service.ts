import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URI_API = 'http://localhost:8080/carts/'

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {

  constructor(private http:HttpClient) { }
  
  getAll() {
    return this.http.get(URI_API+'f9ee5a47-6f06-4b24-96c6-cd724d2eb7c8');
  }

  addItem(sku:string) {
    return this.http.post(URI_API+'f9ee5a47-6f06-4b24-96c6-cd724d2eb7c8?productSku='+sku+'&productQuantity=1', null)
  }
}
