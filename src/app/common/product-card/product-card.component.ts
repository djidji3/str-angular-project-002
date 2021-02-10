import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Observable<Product>;
  prod: Product;

  constructor() {
    this.product.subscribe( pro => {
      this.prod = pro;
    })

  }

  ngOnInit(): void {
  }

}
