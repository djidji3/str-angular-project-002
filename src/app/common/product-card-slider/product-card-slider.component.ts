import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes';

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.scss']
})
export class ProductCardSliderComponent implements OnInit {
  @Input() products: Product[] = [];

  product = this.products.forEach(item => item);

  constructor() { }
    
  ngOnInit(): void {
  }

}
