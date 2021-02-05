export class Product {
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = false;

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id;
      this.catId = properties.catId;
      this.name = properties.name;
      this.description = properties.description;
      this.image = properties.image;
      this.price = properties.price;
      this.stock = properties.stock;
      this.featured = properties.featured;
      this.active = properties.active;
    }
  }
}
