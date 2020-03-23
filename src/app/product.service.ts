import { Injectable } from '@angular/core';
import {data} from './MockData';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  constructor() { }

  listProducts(){
    return this.products;
  }
  addProducts(product){
    let newObj = {id:11, ...product};
    this.products.push(newObj);
  }
}
