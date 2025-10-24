export class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `Name: ${this.name}, Price $${this.price}`;
    }
}
