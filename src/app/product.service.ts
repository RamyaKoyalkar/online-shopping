import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl ='http://localhost:9095/estore/productcontroller/findAllProducts'

  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  newProduct(product:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }
  updateProduct(id:string,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteProduct(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }
}
