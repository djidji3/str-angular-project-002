import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  products = this.productService.list;

  womenProducts: Product[] = 
    this.products
        .filter( products => products.catId > 200)
        .sort( () => Math.random() - 0.5 );

  topFiveFeaturedWomenProducts: Product[] =
    this.womenProducts
        .slice(0, 5);

  constructor( private productService: ProductserviceService ) { }

  ngOnInit(): void {
  }

}
