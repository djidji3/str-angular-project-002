import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ConfigService, ItableCol } from '../../service/config.service';
import { ProductserviceService } from '../../service/productservice.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();

  cols: ItableCol[] = this.config.tableCols;

  @Input('ngModel') ngModel: string;

  phrase: string = "";

  constructor(
    private productService: ProductserviceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {}

  onDeleteProduct(product: Product): void {
    this.productService
      .remove(product)
      .subscribe((updatedProduct) =>
      () => console.log("a törlés megtörtént")
      );
  }

  onUpdateProduct(product: Product): void {
    this.productService
      .update(product).subscribe(
        () =>  window.alert(`A  termék frissítése megtörtént`)
      );
  }
}
