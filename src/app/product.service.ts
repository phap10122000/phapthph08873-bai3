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
  listProduc(id){//du lieuj chi tiet
    return this.products.find(product => product.id == id);
  }
  addProducts(product){
    let newObj = {...product};
    this.products.push(newObj);
  }
   updateProducts(product){
    return this.products.map( item => item.id === product.id ? product : item);
      // return this.products.filter(product => product.id == id);
  }
  removeProducts(id){
    return this.products.filter(product => product.id == id);
  }
}
