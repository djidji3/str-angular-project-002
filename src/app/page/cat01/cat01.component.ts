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
  productList$: Observable<Product[]> = this.productService.getAll();

  // productList$: Observable<Product[]> = this.productService.getAll().pipe(
  //   map( products => products.filter( product => product.catId === 1 ) )
  // );

  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
  }

}
