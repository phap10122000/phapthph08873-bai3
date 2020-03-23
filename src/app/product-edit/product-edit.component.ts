import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products:Product;
  constructor( private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}