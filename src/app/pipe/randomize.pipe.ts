import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'randomize'
})
export class RandomizePipe implements PipeTransform {

  transform(productArray: Product[]): Product[] {
    return productArray.sort( () => Math.random() - 0.5 );
  }

}
