import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }
  showDetail(product) {
    this.selected = product;
  }
  getProducts() {
    this.products = this.productService.listProducts();
  }

  // changeStatus(){
  //   // this.product.status = !this.product.status;
  //   // this.isDisplay = ! this.isDisplay;
  // }
  // changeName(e){
  //   // this.product.name = e.target.value;
  //   console.log(e.target.value);
  // }


  // showDetail(product){
  //   this.selected = product;
  //   // console.log(this.selected);
  // }
  // removeitem(id){
  // //  console.log(id);
  // //  this.products.filter(function(product){
  // //    return this.product.id !== id;
  // //  })
  // this.products = this.products.filter(product=> product.id !== id);
  // }

}
