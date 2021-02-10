import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  phrase: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
