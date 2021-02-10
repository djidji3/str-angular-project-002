import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(productArray: any[], catId: number): any[] {
    if (!Array.isArray(productArray) || !catId) {
      console.log("PROBLÉMA A CATEGORY PIPE-AL")
      return productArray;
    }
    return productArray.filter( product => {
      product.catId === catId;
    })
  }

}
