
import { product } from './../models/products/tproduct';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';
//const apiUrl = 'http://localhost:52297/api/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // productsdata: product[] = [];

  constructor(public http: HttpClient) { }

  getproducts():Observable< product[] > {

    return this.http.get <product[]>(apiUrl)


  }

  // apiUrl = environment.apiUrl;
  // constructor(private http: HttpClient) { }

  // getProducts(){
  //   return this.http.get(this.apiUrl+'products');
  // }


}
