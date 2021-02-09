import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  topFiveFeaturedProducts: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter(featuredProducts => featuredProducts.featured) )
  );

  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
  }

}
