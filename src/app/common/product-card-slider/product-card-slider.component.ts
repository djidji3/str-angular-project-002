import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.scss']
})
export class ProductCardSliderComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
