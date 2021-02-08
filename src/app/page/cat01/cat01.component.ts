import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  /* products = this.productService.list;

  menProducts: Product[] =
    this.products
      .filter( products => products.catId < 200)
      .sort( () => Math.random() - 0.5 );

  topFiveFeaturedMenProducts: Product[] =
    this.menProducts
      .filter( product => product.featured )
      .slice(0, 5); */

  products: Observable<Product[]> = new Observable;
  topFiveFeaturedMenProducts: Observable<Product[]> = new Observable;
  menProducts: Observable<Product[]> = new Observable;
  

  constructor(
    private productService: ProductserviceService
  ) { 
    this.products = productService.getAll();

    this.topFiveFeaturedMenProducts = productService.getAll().pipe(
      map( products => products.filter(featuredMenProducts => (featuredMenProducts.catId < 200) && (featuredMenProducts.featured)) )
    );

    this.menProducts = productService.getAll().pipe(
      map( products => products.filter(menProducts => menProducts.catId < 200) )
    );

    console.log(this.products);
    console.log(this.topFiveFeaturedMenProducts);
    console.log(this.menProducts);
   }

  ngOnInit(): void {
  }

}
