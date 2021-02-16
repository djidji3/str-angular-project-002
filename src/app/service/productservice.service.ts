import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  /* A szever url, ahonnan az adatokat lekérdezzük. */
  apiUrl: string = 'http://localhost:3000/products';

  /* ezt a valtozot figyelem az alkalmazas tobbi reszeben */
  list$: Subject<Product[]> = new Subject();

  constructor(private http: HttpClient) {}

  create(product: Product): void {
    this.http
      .post<Product>(this.apiUrl, product)
      .subscribe(() => this.getAll());
  }

  /**
   * Az összes termék lekérdezése.
   */
  getAll(): void {
    this.http
      .get<Product[]>(this.apiUrl)
      .subscribe((products) => this.list$.next(products));
  }

  /**
   * Egy termék törlése.
   * @param product
   */
  remove(product: Product): void {
    this.http
      .delete<Product>(`${this.apiUrl}/${product.id}`)
      .subscribe(() => this.getAll());
  }

  /**
   * Egy termék módosítása.
   * @param product
   */
  update(product: Product): void {
    this.http
      .patch<Product>(`${this.apiUrl}/${product.id}`, product)
      .subscribe(() => this.getAll());
  }
}
