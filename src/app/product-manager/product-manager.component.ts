import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products : Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  selected:Product;
  showDetail(product) {
    this.selected = product;
  }
  getProducts() {
    this.products = this.productService.listProducts();
  }
  // showDetail(product){
  //   this.selected = product;
  //   console.log(this.selected);
  // }
  
  removeitem(id){
    //  console.log(id);
    //  this.products.filter(function(product){
    //    return this.product.id !== id;
    //  })
    this.products = this.products.filter(product=> product.id !== id);
    
  
    }
}
