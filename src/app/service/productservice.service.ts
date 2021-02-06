import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  list: Product[] = [{
    id: 1,
    catId: 111,
    name: 'Férfi ing bézs színű',
    description: 'Jó minőségű pamutból készült bézs színű ing. Kellemes viselet.',
    image: '/assets/img/ferfi-ing-bezs.jpg',
    price: 12000,
    stock: 5,
    featured: false,
    active: true,
  }, {
    id: 2,
    catId: 112,
    name: 'Férfi ing kék színű',
    description: 'Jó minőségű pamutból készült kék színű ing. Kellemes viselet.',
    image: '/assets/img/ferfi-ing-kek.jpg',
    price: 12300,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 3,
    catId: 113,
    name: 'Férfi ing piros színű',
    description: 'Jó minőségű pamutból készült piros színű ing. Kellemes viselet.',
    image: '/assets/img/ferfi-ing-piros.jpg',
    price: 12100,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 4,
    catId: 114,
    name: 'Férfi ing rózsaszín színű',
    description: 'Jó minőségű pamutból készült rózsaszín színű ing. Kellemes viselet.',
    image: '/assets/img/ferfi-ing-rozsaszin.jpg',
    price: 12500,
    stock: 10,
    featured: false,
    active: true,
  }, {
    id: 5,
    catId: 115,
    name: 'Férfi ing világoskék színű',
    description: 'Jó minőségű pamutból készült világoskék színű ing. Kellemes viselet.',
    image: '/assets/img/ferfi-ing-vilagoskek.jpg',
    price: 12010,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 6,
    catId: 121,
    name: 'Férfi kabát barna színű',
    description: 'Jó minőségű pamutból készült barna színű kabát. Kellemes viselet.',
    image: '/assets/img/ferfi-kabat-barna.png',
    price: 45090,
    stock: 7,
    featured: true,
    active: true,
  }, {
    id: 7,
    catId: 122,
    name: 'Férfi kabát fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű kabát. Kellemes viselet.',
    image: '/assets/img/ferfi-kabat-fekete.jpg',
    price: 45089,
    stock: 13,
    featured: true,
    active: true,
  }, {
    id: 8,
    catId: 123,
    name: 'Férfi kabát piros színű',
    description: 'Jó minőségű pamutból készült piros színű kabát. Kellemes viselet.',
    image: '/assets/img/ferfi-kabat-piros.jpg',
    price: 45800,
    stock: 87,
    featured: false,
    active: true,
  }, {
    id: 9,
    catId: 124,
    name: 'Férfi kabát sárga színű',
    description: 'Jó minőségű pamutból készült sárga színű kabát. Kellemes viselet.',
    image: '/assets/img/ferfi-kabat-sarga.jpg',
    price: 45000,
    stock: 54,
    featured: true,
    active: true,
  }, {
    id: 10,
    catId: 125,
    name: 'Férfi kabát zöld színű',
    description: 'Jó minőségű pamutból készült zöld színű kabát. Kellemes viselet.',
    image: '/assets/img/ferfi-kabat-zold.jpg',
    price: 45020,
    stock: 2,
    featured: true,
    active: true,
  }, {
    id: 11,
    catId: 131,
    name: 'Férfi kardigán fehér színű',
    description: 'Jó minőségű pamutból készült fehér színű kardigán. Kellemes viselet.',
    image: '/assets/img/ferfi-kardigan-feher.png',
    price: 8500,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 12,
    catId: 132,
    name: 'Férfi kardigán kék színű',
    description: 'Jó minőségű pamutból készült kék színű kardigán. Kellemes viselet.',
    image: '/assets/img/ferfi-kardigan-kek.png',
    price: 8500,
    stock: 4,
    featured: false,
    active: true,
  }, {
    id: 13,
    catId: 133,
    name: 'Férfi kardigán sötétszürke színű',
    description: 'Jó minőségű pamutból készült sötétszürke színű kardigán. Kellemes viselet.',
    image: '/assets/img/ferfi-kardigan-sotetszurke.png',
    price: 8560,
    stock: 33,
    featured: true,
    active: true,
  }, {
    id: 14,
    catId: 134,
    name: 'Férfi kardigán szürke színű',
    description: 'Jó minőségű pamutból készült szürke színű kardigán. Kellemes viselet.',
    image: '/assets/img/ferfi-kardigan-szurke.jpg',
    price: 8509,
    stock: 6,
    featured: true,
    active: true,
  }, {
    id: 15,
    catId: 135,
    name: 'Férfi kardigán tarka színű',
    description: 'Jó minőségű pamutból készült tarka színű kardigán. Kellemes viselet.',
    image: '/assets/img/ferfi-kardigan-tarka.jpg',
    price: 8510,
    stock: 41,
    featured: true,
    active: true,
  }, {
    id: 16,
    catId: 141,
    name: 'Férfi nadrág fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű nadrág. Kellemes viselet.',
    image: '/assets/img/ferfi-nadrag-fekete.jpg',
    price: 10500,
    stock: 23,
    featured: false,
    active: true,
  }, {
    id: 17,
    catId: 142,
    name: 'Férfi nadrág sötétfekete színű',
    description: 'Jó minőségű pamutból készült sötétfekete színű nadrág. Kellemes viselet.',
    image: '/assets/img/ferfi-nadrag-sotetfekete.jpg',
    price: 10550,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 18,
    catId: 143,
    name: 'Férfi nadrág szürke színű',
    description: 'Jó minőségű pamutból készült szürke színű nadrág. Kellemes viselet.',
    image: '/assets/img/ferfi-nadrag-szurke.jpg',
    price: 10508,
    stock: 66,
    featured: true,
    active: true,
  }, {
    id: 19,
    catId: 144,
    name: 'Férfi nadrág zöld színű',
    description: 'Jó minőségű pamutból készült zöld színű nadrág. Kellemes viselet.',
    image: '/assets/img/ferfi-nadrag-zold.jpg',
    price: 10510,
    stock: 19,
    featured: true,
    active: true,
  }, {
    id: 20,
    catId: 145,
    name: 'Férfi nadrág zöld színű',
    description: 'Jó minőségű pamutból készült zöld színű nadrág. Kellemes viselet.',
    image: '/assets/img/ferfi-nadrag-zold.jpg',
    price: 10580,
    stock: 12,
    featured: true,
    active: true,
  }, {
    id: 21,
    catId: 151,
    name: 'Férfi pulóver fehér színű',
    description: 'Jó minőségű pamutból készült fehér színű pulóver. Kellemes viselet.',
    image: '/assets/img/ferfi-pulover-feher.jpg',
    price: 8670,
    stock: 61,
    featured: true,
    active: true,
  }, {
    id: 22,
    catId: 152,
    name: 'Férfi pulóver fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű pulóver. Kellemes viselet.',
    image: '/assets/img/ferfi-pulover-fekete.jpg',
    price: 8670,
    stock: 4,
    featured: true,
    active: true,
  }, {
    id: 23,
    catId: 153,
    name: 'Férfi pulóver kék színű',
    description: 'Jó minőségű pamutból készült kék színű pulóver. Kellemes viselet.',
    image: '/assets/img/ferfi-pulover-kek.jpg',
    price: 8670,
    stock: 6,
    featured: false,
    active: true,
  }, {
    id: 24,
    catId: 154,
    name: 'Férfi pulóver piros színű',
    description: 'Jó minőségű pamutból készült piros színű pulóver. Kellemes viselet.',
    image: '/assets/img/ferfi-pulover-piros.jpg',
    price: 8670,
    stock: 11,
    featured: true,
    active: true,
  }, {
    id: 25,
    catId: 155,
    name: 'Férfi pulóver szürke színű',
    description: 'Jó minőségű pamutból készült szürke színű pulóver. Kellemes viselet.',
    image: '/assets/img/ferfi-pulover-szurke.jpg',
    price: 8670,
    stock: 55,
    featured: false,
    active: true,
  }, {
    id: 26,
    catId: 211,
    name: 'Női felső fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű felső. Kellemes viselet.',
    image: '/assets/img/noi-felso-fekete.jpg',
    price: 9880,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 27,
    catId: 212,
    name: 'Női felső pöttyös színű',
    description: 'Jó minőségű pamutból készült pöttyös színű felső. Kellemes viselet.',
    image: '/assets/img/noi-felso-pottyos.jpg',
    price: 9880,
    stock: 63,
    featured: false,
    active: true,
  }, {
    id: 28,
    catId: 213,
    name: 'Női felső rózsaszín színű',
    description: 'Jó minőségű pamutból készült rózsaszín színű felső. Kellemes viselet.',
    image: '/assets/img/noi-felso-rozsaszin.jpg',
    price: 9880,
    stock: 41,
    featured: true,
    active: true,
  }, {
    id: 29,
    catId: 214,
    name: 'Női felső tarka színű',
    description: 'Jó minőségű pamutból készült tarka színű felső. Kellemes viselet.',
    image: '/assets/img/noi-felso-tarka.jpg',
    price: 9880,
    stock: 3,
    featured: true,
    active: true,
  }, {
    id: 30,
    catId: 215,
    name: 'Női felső virágos színű',
    description: 'Jó minőségű pamutból készült virágos színű felső. Kellemes viselet.',
    image: '/assets/img/noi-felso-viragos.jpg',
    price: 9880,
    stock: 13,
    featured: true,
    active: true,
  }, {
    id: 31,
    catId: 221,
    name: 'Női alkalmi ruha fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű alkalmiruha. Kellemes viselet.',
    image: '/assets/img/noi-alkalmiruha-fekete.jpg',
    price: 25030,
    stock: 10,
    featured: false,
    active: true,
  }, {
    id: 32,
    catId: 222,
    name: 'Női alkalmi ruha kék színű',
    description: 'Jó minőségű pamutból készült kék színű alkalmiruha. Kellemes viselet.',
    image: '/assets/img/noi-alkalmiruha-kek.jpg',
    price: 25030,
    stock: 11,
    featured: true,
    active: true,
  }, {
    id: 33,
    catId: 223,
    name: 'Női alkalmi ruha piros színű',
    description: 'Jó minőségű pamutból készült piros színű alkalmiruha. Kellemes viselet.',
    image: '/assets/img/noi-alkalmiruha-piros.jpg',
    price: 25030,
    stock: 10,
    featured: false,
    active: true,
  }, {
    id: 34,
    catId: 224,
    name: 'Női alkalmi ruha sárga színű',
    description: 'Jó minőségű pamutból készült sárga színű alkalmiruha. Kellemes viselet.',
    image: '/assets/img/noi-alkalmiruha-sarga.jpg',
    price: 25030,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 35,
    catId: 225,
    name: 'Női alkalmi ruha zöld színű',
    description: 'Jó minőségű pamutból készült zöld színű alkalmiruha. Kellemes viselet.',
    image: '/assets/img/noi-alkalmiruha-zold.jpg',
    price: 25030,
    stock: 9,
    featured: true,
    active: true,
  }, {
    id: 36,
    catId: 231,
    name: 'Női fehérnemű bézs színű',
    description: 'Jó minőségű pamutból készült bézs színű fehérnemű. Kellemes viselet.',
    image: '/assets/img/noi-fehernemu-bezs.jpg',
    price: 8000,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 37,
    catId: 232,
    name: 'Női fehérnemű fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű fehérnemű. Kellemes viselet.',
    image: '/assets/img/noi-fehernemu-fekete.jpg',
    price: 8000,
    stock: 44,
    featured: true,
    active: true,
  }, {
    id: 38,
    catId: 233,
    name: 'Női fehérnemű lila színű',
    description: 'Jó minőségű pamutból készült lila színű fehérnemű. Kellemes viselet.',
    image: '/assets/img/noi-fehernemu-lila.jpg',
    price: 8000,
    stock: 56,
    featured: false,
    active: true,
  }, {
    id: 39,
    catId: 234,
    name: 'Női fehérnemű piros színű',
    description: 'Jó minőségű pamutból készült piros színű fehérnemű. Kellemes viselet.',
    image: '/assets/img/noi-fehernemu-piros.jpg',
    price: 8000,
    stock: 12,
    featured: true,
    active: true,
  }, {
    id: 40,
    catId: 235,
    name: 'Női fehérnemű rózsaszín színű',
    description: 'Jó minőségű pamutból készült rózsaszín színű fehérnemű. Kellemes viselet.',
    image: '/assets/img/noi-fehernemu-rozsaszin.jpg',
    price: 8000,
    stock: 4,
    featured: false,
    active: true,
  }, {
    id: 41,
    catId: 241,
    name: 'Női kabát bézs színű',
    description: 'Jó minőségű pamutból készült bézs színű kabát. Kellemes viselet.',
    image: '/assets/img/noi-kabat-bezs.png',
    price: 45000,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 42,
    catId: 242,
    name: 'Női kabát fehér színű',
    description: 'Jó minőségű pamutból készült fehér színű kabát. Kellemes viselet.',
    image: '/assets/img/noi-kabat-feher.jpg',
    price: 45000,
    stock: 8,
    featured: false,
    active: true,
  }, {
    id: 43,
    catId: 243,
    name: 'Női kabát fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű kabát. Kellemes viselet.',
    image: '/assets/img/noi-kabat-fekete.jpg',
    price: 45000,
    stock: 22,
    featured: true,
    active: true,
  }, {
    id: 44,
    catId: 244,
    name: 'Női kabát piros színű',
    description: 'Jó minőségű pamutból készült piros színű kabát. Kellemes viselet.',
    image: '/assets/img/noi-kabat-piros.jpg',
    price: 45000,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 45,
    catId: 245,
    name: 'Női kabát szürke színű',
    description: 'Jó minőségű pamutból készült szürke színű kabát. Kellemes viselet.',
    image: '/assets/img/noi-kabat-szurke.jpg',
    price: 45000,
    stock: 5,
    featured: true,
    active: true,
  }, {
    id: 46,
    catId: 251,
    name: 'Női pizsama fekete színű',
    description: 'Jó minőségű pamutból készült fekete színű pizsama. Kellemes viselet.',
    image: '/assets/img/noi-pizsama-fekete.jpg',
    price: 10000,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 47,
    catId: 252,
    name: 'Női pizsama pöttyös színű',
    description: 'Jó minőségű pamutból készült pöttyös színű pizsama. Kellemes viselet.',
    image: '/assets/img/noi-pizsama-pottyos.jpg',
    price: 10000,
    stock: 63,
    featured: true,
    active: true,
  }, {
    id: 48,
    catId: 253,
    name: 'Női pizsama szives színű',
    description: 'Jó minőségű pamutból készült szives színű pizsama. Kellemes viselet.',
    image: '/assets/img/noi-pizsama-szives.jpg',
    price: 10000,
    stock: 10,
    featured: true,
    active: true,
  }, {
    id: 49,
    catId: 254,
    name: 'Női pizsama tarka színű',
    description: 'Jó minőségű pamutból készült tarka színű pizsama. Kellemes viselet.',
    image: '/assets/img/noi-pizsama-tarka.jpg',
    price: 10000,
    stock: 8,
    featured: false,
    active: true,
  }, {
    id: 50,
    catId: 255,
    name: 'Női pizsama zöld színű',
    description: 'Jó minőségű pamutból készült zöld színű pizsama. Kellemes viselet.',
    image: '/assets/img/noi-pizsama-zold.jpg',
    price: 10000,
    stock: 44,
    featured: true,
    active: true,
  }
  ];

    /* a sever url,ahonnan az adatokat lekerdezzuk */
  apiUrl: string = 'http://localhost:3000/products';
  constructor( private http: HttpClient) { }

  create(product:Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

 /**
  * Osszes termek lekerdezese
  */
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * egy termek lekerdezese
   * @param product
   */
  get(product:Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  /**
   * egy termek torlese
   * @param product
   */
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

  /**
   * egy termek modositasa
   * @param product
   */
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  getFeatured(randomized?: boolean): Product[] {
    const featured = this.list.filter(item => item.featured);
    return randomized ? this.randomize(featured) : featured;
  }

  randomize(sourceArray: Product[]): Product[] {
    return sourceArray.sort( () => Math.random() - 0.5);
  }


}
