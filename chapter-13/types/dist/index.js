import { Product } from "./dataTypes.js";
let p1 = { name: "Kayak" };
let p2 = { name: "Lifejacket", price: 48.95 };
console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);
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
