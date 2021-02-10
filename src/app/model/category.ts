export class Category {
  [propname: string]: any;
  id: number = 0;
  name: string = '';
  description: string = '';

  constructor(properties?: Category) {
    if (properties) {
      this.id = properties.id;
      this.name = properties.name;
      this.description = properties.description;
    }
  }
}
