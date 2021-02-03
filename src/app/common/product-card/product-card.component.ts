import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
