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
    let newObj = {...product};
    this.products.push(newObj);
  }
   updateProducts(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
  removeProducts(id){
    return this.products.filter(product => product.id == id);
  }
}
