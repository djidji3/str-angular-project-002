import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]> = this.productService.getAll();

  topFiveFeaturedProducts: Product[] = this.productService.getFeatured(true)
    .slice(0, 5);

  topFiveDiscountProducts: Product[] = this.productService.randomize(this.products)
    .slice(0, 5);


  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
  }

}
