import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ConfigService, ItableCol } from '../../service/config.service';
import { ProductserviceService } from '../../service/productservice.service';

interface IpageBtn{ page: number;}
@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  /* lapozo  */

productsNum: number = 0;
pageSize: number = 10;
pageStart: number = 1;
currentPage: number = 1;
get paginator(): IpageBtn[]{
  const pages : IpageBtn[] = [];
  for (let i = 0; i < this.productsNum / this.pageSize && pages.length < 10; i++) {
    const page = this.pageStart +1;
    pages.push({page});
  }
  return pages;
}

get pageSliceStart(): number {
  const index = this.currentPage  - 1;
  return  index === 0 ? 0  : (index * this.pageSize);
}

get pageSliceEnd(): number {
  return this.pageSliceStart + this.pageSize;
}


  /* temek megjelenites -  esetleges szures valtozoi */
  productList$: Observable<Product[]> = this.productService.list$;

  phrase:string = "";

  filterKey: string = 'name';

  /* a termekek kulcsait beleteszem egy valtozoba */
  filterKeys: string[] = Object.keys(new Product() );

  cols: ItableCol[] = this.config.tableCols;

  @Input('ngModel') ngModel: string;

  constructor(
    private productService: ProductserviceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  onDeleteProduct(product: Product): void {
    this.productService.remove(product);
  }

  onUpdateProduct(product: Product): void {
    this.productService.update(product);
  }

  /* lapozonal a gombkattintast kezeli le */
  onPaginate (ev: Event, btn: IpageBtn): void {
    ev.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page -5) < 1 ? 1 : (btn.page - 5);
   console.log(btn);
  }

  onStepPage (ev: Event, step: number): void {
    ev.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage -5) < 1 ? 1 : (this.currentPage - 5);
  }

}
