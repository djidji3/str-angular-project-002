import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  catId: number = 1;

  menProductList$: Observable<Product[]> = this.productService.list$.pipe(
    map( products => products
      .filter(menProducts => menProducts.catid === this.catId)
    )
  );

  featuredMenProducts$: Observable<Product[]> = this.productService.list$.pipe(
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
