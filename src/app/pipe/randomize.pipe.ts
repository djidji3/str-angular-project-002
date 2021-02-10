import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(productArray: Product[]): Product[] {
    if (!Array.isArray(productArray)) {
      return productArray;
    }
    return productArray.sort( () => Math.random() - 0.5 );
  }

}
