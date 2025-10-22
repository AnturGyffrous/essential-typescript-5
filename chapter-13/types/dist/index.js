import { Product, Employee } from "./dataTypes.js";
function getValue(item, keyname) {
    return item[keyname];
}
let p = new Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
console.log();
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
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
