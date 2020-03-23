import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../Product';
import { ProductService } from "../product.service";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product = new Product;
  constructor( private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
  this.route.params.subscribe(param => {
   this.product = this.productService.listProduc(param.id);
  })
  }
 
   submitForm(){
    this.productService.updateProducts(this.product);
    this.router.navigate(['/manager']);
  }

}