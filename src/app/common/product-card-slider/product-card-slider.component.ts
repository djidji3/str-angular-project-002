import { Component, OnInit } from '@angular/core';
import { Product, Category } from 'src/app/model/classes';

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.scss']
})
export class ProductCardSliderComponent implements OnInit {

  products: string[] = ["alma", "körte", "barack", "citrom", "banán"]

  constructor() { }

  ngOnInit(): void {
  }

}
