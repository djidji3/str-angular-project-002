import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/classes';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = this.productService.list;

  topFiveFeaturedProducts: Product[] =
    this.products
      .filter( product => product.featured )
      .sort( () => Math.random() - 0.5)
      .slice(0, 5);

  topFiveDiscountProducts: Product[] =
    this.products
      .sort( () => Math.random() - 0.5)
      .slice(0, 5);


  // featuredProduct: Product[] = this.productService.getFeatured(true);

  constructor( private productService: ProductserviceService ) { }



  ngOnInit(): void {
  }

}
