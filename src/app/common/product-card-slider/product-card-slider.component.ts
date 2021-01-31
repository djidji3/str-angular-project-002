import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-product-card-slider',
  templateUrl: './product-card-slider.component.html',
  styleUrls: ['./product-card-slider.component.scss']
})
export class ProductCardSliderComponent implements OnInit {
  products = ProductserviceService.list;
    
  constructor() { }
    
  ngOnInit(): void {
  }

}
