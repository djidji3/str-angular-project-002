import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  products = this.productService.list;

  menProducts: Product[] =
    this.products
      .filter( products => products.catId < 200)
      .sort( () => Math.random() - 0.5 );

  topFiveFeaturedMenProducts: Product[] =
    this.menProducts
      .filter( product => product.featured )
      .slice(0, 5);

  constructor( private productService: ProductserviceService ) { }

  ngOnInit(): void {
  }

}
