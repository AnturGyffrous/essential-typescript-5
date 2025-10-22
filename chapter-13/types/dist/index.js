import { Product } from "./dataTypes.js";
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
class Collection {
    items;
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    values() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let iterator = productCollection.values();
let result = iterator.next();
while (!result.done) {
    console.log(`Product: ${result.value.name}, ${result.value.price}`);
    result = iterator.next();
}
