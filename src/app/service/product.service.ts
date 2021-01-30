import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [{
    "id": 1,
    "catId": 1,
    "name": "Dodge",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    "image": "diam id ornare",
    "price": 1364,
    "stock": 7,
    "featured": true,
    "active": false
  }, {
    "id": 2,
    "catId": 2,
    "name": "Isuzu",
    "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "image": "turpis integer",
    "price": 4940,
    "stock": 2,
    "featured": false,
    "active": true
  }, {
    "id": 3,
    "catId": 3,
    "name": "Oldsmobile",
    "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "image": "metus aenean fermentum",
    "price": 3336,
    "stock": 30,
    "featured": false,
    "active": false
  }, {
    "id": 4,
    "catId": 4,
    "name": "Mitsubishi",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus.",
    "image": "montes",
    "price": 8460,
    "stock": 1,
    "featured": true,
    "active": true
  }, {
    "id": 5,
    "catId": 5,
    "name": "Hyundai",
    "description": "Proin risus. Praesent lectus.",
    "image": "lobortis est",
    "price": 3363,
    "stock": 23,
    "featured": true,
    "active": true
  }, {
    "id": 6,
    "catId": 6,
    "name": "Lincoln",
    "description": "In blandit ultrices enim.",
    "image": "volutpat",
    "price": 9550,
    "stock": 49,
    "featured": true,
    "active": false
  }, {
    "id": 7,
    "catId": 7,
    "name": "Honda",
    "description": "Etiam pretium iaculis justo.",
    "image": "sapien in sapien",
    "price": 4591,
    "stock": 28,
    "featured": false,
    "active": true
  }, {
    "id": 8,
    "catId": 8,
    "name": "Isuzu",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "image": "blandit lacinia erat",
    "price": 7988,
    "stock": 35,
    "featured": false,
    "active": false
  }, {
    "id": 9,
    "catId": 9,
    "name": "Ford",
    "description": "Pellentesque ultrices mattis odio.",
    "image": "est",
    "price": 9057,
    "stock": 49,
    "featured": true,
    "active": true
  }, {
    "id": 10,
    "catId": 10,
    "name": "Ford",
    "description": "In sagittis dui vel nisl.",
    "image": "blandit non",
    "price": 8085,
    "stock": 14,
    "featured": true,
    "active": false
  }, {
    "id": 11,
    "catId": 11,
    "name": "Isuzu",
    "description": "In sagittis dui vel nisl. Duis ac nibh.",
    "image": "vitae",
    "price": 7587,
    "stock": 5,
    "featured": false,
    "active": true
  }, {
    "id": 12,
    "catId": 12,
    "name": "Ford",
    "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "image": "pellentesque",
    "price": 5008,
    "stock": 8,
    "featured": false,
    "active": true
  }, {
    "id": 13,
    "catId": 13,
    "name": "Chevrolet",
    "description": "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "image": "consequat",
    "price": 777,
    "stock": 20,
    "featured": true,
    "active": true
  }, {
    "id": 14,
    "catId": 14,
    "name": "Ford",
    "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "image": "maecenas",
    "price": 5556,
    "stock": 42,
    "featured": false,
    "active": false
  }, {
    "id": 15,
    "catId": 15,
    "name": "BMW",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    "image": "a",
    "price": 6529,
    "stock": 13,
    "featured": false,
    "active": false
  }, {
    "id": 16,
    "catId": 16,
    "name": "Bentley",
    "description": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    "image": "vestibulum",
    "price": 7918,
    "stock": 27,
    "featured": false,
    "active": false
  }, {
    "id": 17,
    "catId": 17,
    "name": "Saab",
    "description": "Mauris lacinia sapien quis libero.",
    "image": "lacinia",
    "price": 6984,
    "stock": 5,
    "featured": true,
    "active": true
  }, {
    "id": 18,
    "catId": 18,
    "name": "Ford",
    "description": "In congue.",
    "image": "quisque ut",
    "price": 8911,
    "stock": 45,
    "featured": true,
    "active": false
  }, {
    "id": 19,
    "catId": 19,
    "name": "Porsche",
    "description": "Morbi quis tortor id nulla ultrices aliquet.",
    "image": "eget congue eget",
    "price": 9031,
    "stock": 50,
    "featured": false,
    "active": false
  }, {
    "id": 20,
    "catId": 20,
    "name": "Chrysler",
    "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "image": "libero nam dui",
    "price": 6742,
    "stock": 45,
    "featured": true,
    "active": true
  }, {
    "id": 21,
    "catId": 21,
    "name": "Ford",
    "description": "Aenean sit amet justo. Morbi ut odio.",
    "image": "elementum",
    "price": 5973,
    "stock": 18,
    "featured": true,
    "active": true
  }, {
    "id": 22,
    "catId": 22,
    "name": "Chevrolet",
    "description": "In congue.",
    "image": "dictumst",
    "price": 3407,
    "stock": 18,
    "featured": true,
    "active": true
  }, {
    "id": 23,
    "catId": 23,
    "name": "BMW",
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    "image": "dictumst maecenas ut",
    "price": 9382,
    "stock": 49,
    "featured": true,
    "active": true
  }, {
    "id": 24,
    "catId": 24,
    "name": "Mercury",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "image": "iaculis",
    "price": 1318,
    "stock": 38,
    "featured": false,
    "active": false
  }, {
    "id": 25,
    "catId": 25,
    "name": "Chrysler",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "image": "justo",
    "price": 8370,
    "stock": 32,
    "featured": true,
    "active": true
  }, {
    "id": 26,
    "catId": 26,
    "name": "Volvo",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "image": "at dolor quis",
    "price": 1359,
    "stock": 20,
    "featured": false,
    "active": false
  }, {
    "id": 27,
    "catId": 27,
    "name": "Subaru",
    "description": "Proin risus. Praesent lectus.",
    "image": "libero convallis eget",
    "price": 3902,
    "stock": 43,
    "featured": false,
    "active": false
  }, {
    "id": 28,
    "catId": 28,
    "name": "Dodge",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    "image": "porttitor pede",
    "price": 7085,
    "stock": 43,
    "featured": false,
    "active": true
  }, {
    "id": 29,
    "catId": 29,
    "name": "Volkswagen",
    "description": "Nullam porttitor lacus at turpis.",
    "image": "congue",
    "price": 2289,
    "stock": 33,
    "featured": true,
    "active": false
  }, {
    "id": 30,
    "catId": 30,
    "name": "Ford",
    "description": "Integer ac neque. Duis bibendum.",
    "image": "morbi vel lectus",
    "price": 8551,
    "stock": 44,
    "featured": false,
    "active": false
  }, {
    "id": 31,
    "catId": 31,
    "name": "Land Rover",
    "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    "image": "molestie nibh",
    "price": 2133,
    "stock": 50,
    "featured": true,
    "active": false
  }, {
    "id": 32,
    "catId": 32,
    "name": "Nissan",
    "description": "Nullam porttitor lacus at turpis.",
    "image": "ac consequat",
    "price": 5718,
    "stock": 27,
    "featured": false,
    "active": true
  }, {
    "id": 33,
    "catId": 33,
    "name": "Volvo",
    "description": "Aliquam non mauris. Morbi non lectus.",
    "image": "primis in faucibus",
    "price": 6358,
    "stock": 16,
    "featured": true,
    "active": true
  }, {
    "id": 34,
    "catId": 34,
    "name": "Nissan",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "image": "magna vestibulum aliquet",
    "price": 3781,
    "stock": 1,
    "featured": false,
    "active": true
  }, {
    "id": 35,
    "catId": 35,
    "name": "Chevrolet",
    "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "image": "venenatis non sodales",
    "price": 9194,
    "stock": 22,
    "featured": true,
    "active": false
  }, {
    "id": 36,
    "catId": 36,
    "name": "Rolls-Royce",
    "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    "image": "tellus",
    "price": 3686,
    "stock": 19,
    "featured": true,
    "active": false
  }, {
    "id": 37,
    "catId": 37,
    "name": "Oldsmobile",
    "description": "Sed vel enim sit amet nunc viverra dapibus.",
    "image": "gravida nisi",
    "price": 514,
    "stock": 27,
    "featured": true,
    "active": true
  }, {
    "id": 38,
    "catId": 38,
    "name": "Toyota",
    "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "image": "mauris",
    "price": 2057,
    "stock": 46,
    "featured": true,
    "active": false
  }, {
    "id": 39,
    "catId": 39,
    "name": "Chevrolet",
    "description": "Mauris sit amet eros.",
    "image": "hac habitasse platea",
    "price": 8333,
    "stock": 28,
    "featured": false,
    "active": false
  }, {
    "id": 40,
    "catId": 40,
    "name": "Ford",
    "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "image": "suspendisse accumsan tortor",
    "price": 5341,
    "stock": 31,
    "featured": true,
    "active": false
  }, {
    "id": 41,
    "catId": 41,
    "name": "Pontiac",
    "description": "In sagittis dui vel nisl. Duis ac nibh.",
    "image": "congue risus",
    "price": 6986,
    "stock": 50,
    "featured": false,
    "active": false
  }, {
    "id": 42,
    "catId": 42,
    "name": "Aston Martin",
    "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "image": "imperdiet nullam orci",
    "price": 2264,
    "stock": 20,
    "featured": false,
    "active": true
  }, {
    "id": 43,
    "catId": 43,
    "name": "Mercedes-Benz",
    "description": "In congue.",
    "image": "in libero ut",
    "price": 4378,
    "stock": 13,
    "featured": false,
    "active": false
  }, {
    "id": 44,
    "catId": 44,
    "name": "Suzuki",
    "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "image": "suspendisse",
    "price": 4548,
    "stock": 46,
    "featured": false,
    "active": false
  }, {
    "id": 45,
    "catId": 45,
    "name": "Subaru",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "image": "proin interdum",
    "price": 7949,
    "stock": 21,
    "featured": false,
    "active": false
  }, {
    "id": 46,
    "catId": 46,
    "name": "Mercury",
    "description": "Donec quis orci eget orci vehicula condimentum.",
    "image": "phasellus sit",
    "price": 7888,
    "stock": 8,
    "featured": false,
    "active": false
  }, {
    "id": 47,
    "catId": 47,
    "name": "Volkswagen",
    "description": "Proin eu mi. Nulla ac enim.",
    "image": "enim in",
    "price": 8546,
    "stock": 18,
    "featured": false,
    "active": false
  }, {
    "id": 48,
    "catId": 48,
    "name": "Audi",
    "description": "Fusce posuere felis sed lacus.",
    "image": "ut",
    "price": 800,
    "stock": 31,
    "featured": false,
    "active": true
  }, {
    "id": 49,
    "catId": 49,
    "name": "Ford",
    "description": "Phasellus sit amet erat. Nulla tempus.",
    "image": "justo nec",
    "price": 9497,
    "stock": 29,
    "featured": false,
    "active": false
  }, {
    "id": 50,
    "catId": 50,
    "name": "Alfa Romeo",
    "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "image": "nulla ac",
    "price": 9096,
    "stock": 32,
    "featured": true,
    "active": false
  }]

  constructor() { }
}
