import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(productArray: Product[]): Product[] {
    if (!Array.isArray(productArray)) {
      return productArray;
    }
    return productArray.filter( product => product.featured );
  }

}
