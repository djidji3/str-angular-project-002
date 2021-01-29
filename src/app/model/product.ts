export class Product {
    id: number;
    catId: number;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;

    constructor(
        id: number,
        catId: number,
        name: string,
        description: string,
        image: string,
        price: number,
        stock: number,
        featured: boolean,
        active: boolean
        ) {
            this.id = id || 0;
            this.catId = catId || 0;
            this.name = name || "";
            this.description = description || "";
            this.image = image || "";
            this.price = price || 0;
            this.stock = stock || 0;
            this.featured = featured || false;
            this.active = active || true;
    }
}