import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  /* A szever url, ahonnan az adatokat lekérdezzük. */
  apiUrl: string = 'http://localhost:3000/products';

  constructor( private http: HttpClient ) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

 /**
  * Az összes termék lekérdezése.
  */
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Egy termék lekérdezése.
   * @param product
   */
  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  /**
   * Egy termék törlése.
   * @param product
   */
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

  /**
   * Egy termék módosítása.
   * @param product
   */
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

}
