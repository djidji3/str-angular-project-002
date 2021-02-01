import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  products = this.productService.list;

  constructor( private productService: ProductserviceService ) { }

  ngOnInit(): void {
  }

}
