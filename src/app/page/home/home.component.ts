import { Component, OnInit } from '@angular/core';
import { Product, Category } from 'src/app/model/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  
  constructor() { 
    // const topFiveFeaturedProducts: Product[] = 
    //   this.products
    //     .filter( product => product.featured )
    //     .sort( () => 0.5 - Math.random())
    //     .slice(0, 5);
  }

  ngOnInit(): void {
  }

}
