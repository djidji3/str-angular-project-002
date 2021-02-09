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
  productList$: Observable<Product[]> = this.productService.getAll();

  // productList$: Observable<Product[]> = this.productService.getAll().pipe(
  //   map( products => products.filter( product => product.catId === 2 ) )
  // );

  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
  }

}
