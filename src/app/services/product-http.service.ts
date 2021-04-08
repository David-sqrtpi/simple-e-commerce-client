import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const URI_API:string = 'http://localhost:8080/product';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(URI_API);
  }
}