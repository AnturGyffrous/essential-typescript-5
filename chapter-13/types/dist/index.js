import { Product } from "./dataTypes.js";
let p = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
let c = { name: "London", population: 8136000 };
console.log(`Mapped type: ${c.name}, ${c.population}`);
console.log();
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
class Collection {
    propertyName;
    items;
    constructor(initialItems = [], propertyName) {
        this.propertyName = propertyName;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products, "price");
console.log(`There are ${productCollection.count} products`);
let itemByKey = productCollection.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
