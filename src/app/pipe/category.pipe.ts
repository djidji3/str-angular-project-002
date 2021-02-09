import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(productArray: Product[], catId: number): Product[] {
/*     if (!Array.isArray(productArray) || !catId) {
      return productArray;
    } */
    return productArray.filter( product => catId == product.catId)
  }

}
