import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from '../Product';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  constructor( private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
   this.product = this.productService.listProduc(param.id);
  
  })
  }

}