class Product {
  id: number;
  catId: number;
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  featured: boolean;
  active: boolean;

  constructor(id: number, catId: number, name: string, description: string, image: string, price: number, stock: number, featured: boolean, active: boolean) {
    this.id = id;
    this.catId = catId;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.stock = stock;
    this.featured = featured;
    this.active = active;

  }
}

class Category {
  id: number;
  name: string;
  description: string;

  constructor(description, name, id) {
    this.description = description;
    this.name = name;
    this.id = id;
  }
}
