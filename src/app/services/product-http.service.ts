import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const URI_API:string = 'http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(URI_API);
  }

  getOne(sku:string) {
    return this.http.get(URI_API+sku);
  }

  modify(body:object) {
    return this.http.put(URI_API+body['sku'], body);
  }

  save(body:object) {
    return this.http.post(URI_API, body)
  }
}
