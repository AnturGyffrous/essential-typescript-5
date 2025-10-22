import { Product } from "./dataTypes.js";
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
class Collection {
    items;
    constructor(items = []) {
        this.items = items;
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
