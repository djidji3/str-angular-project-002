import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {
  @Input() products: Product[] = [];

  product = this.products.forEach(item => item);
  phrase: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
