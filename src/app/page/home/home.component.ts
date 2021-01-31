import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/classes';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = ProductserviceService.list;
  
  topFiveFeaturedProducts: Product[] = 
    this.products
      .filter( product => product.featured )
      .sort( () => 0.5 - Math.random())
      .slice(0, 5);

  topFiveDiscountProducts: Product[] = 
    this.products
      .sort( () => 0.5 - Math.random())
      .slice(0, 5);

  constructor() { 
    console.log(this.topFiveFeaturedProducts);
    console.log(this.topFiveDiscountProducts);
  }
  
  ngOnInit(): void {
  }

}