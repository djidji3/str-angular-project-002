import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /*   topFiveFeaturedProducts: Product[] = this.productService.getFeatured(true)
  .slice(0, 5);
  
  topFiveDiscountProducts: Product[] = this.productService.randomize(this.products)
  .slice(0, 5); */
  
  products: Observable<Product[]> = new Observable;
  topFiveFeaturedProducts: Observable<Product[]> = new Observable;
  topFiveDiscountProducts: Observable<Product[]> = new Observable;

  constructor(
    private productService: ProductserviceService
  ) { 
    this.products = productService.getAll();

    this.topFiveFeaturedProducts = productService.getAll().pipe(
      map( products => products.filter(featuredProducts => featuredProducts.featured) )
    );

    this.topFiveDiscountProducts = productService.getAll().pipe(
      map( products => products )
    );

  }

  ngOnInit(): void {
  }

}
