import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  catId: number = 2;

  womenProductList$: Observable<Product[]> = this.productService.list$.pipe(
    map( products => products
      .filter(menProducts => menProducts.catid === this.catId)
    )
  );

  featuredWomenProducts$: Observable<Product[]> = this.productService.list$.pipe(
    map( products => products
      .filter(featProducts => featProducts.featured)
      .filter(menProducts => menProducts.catid === this.catId)
    )
  );

  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }
}
