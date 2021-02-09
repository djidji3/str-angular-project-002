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

  /*   topFiveFeaturedProducts: Product[] = this.productService.getFeatured(true)
  .slice(0, 5);
  topFiveDiscountProducts: Product[] = this.productService.randomize(this.products)
  .slice(0, 5); */

  products = this.productService.getAll().subscribe(
    product => console.log(product),
    err => console.error(err) ,
    () => console.log("COMPLETE")
  );  //ez csak azért kell, hogy valamivel tudjak dolgozni


  topFiveFeaturedProducts: Observable<Product[]> = this.productService.getAll().pipe(
    map( products => products.filter(featuredProducts => featuredProducts.featured) )
  );

  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductserviceService
  ) { }

  ngOnInit(): void {
  }

}
