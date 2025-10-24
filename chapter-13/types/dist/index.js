import { City, Person, Product } from "./dataTypes.js";
let p1 = { name: "Bob", city: "London" };
let p2 = { name: "Alice", city: "Paris" };
console.log(`Custom mapped type: ${p1.name}, ${p1.city}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.city}`);
console.log();
let firstBoolVal = "String value";
let secondBoolVal = 100;
let firstVal = new City("Paris", 2141000);
let secondVal = new Person("Alice", "Paris");
let thirdVal = new Product("Running Shoes", 100);
let products = [new Product("Running Shoes", 100), new Product("Hat", 25), new Product("Lifejacket", 48.95)];
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
    // total<P extends keyof T, U extends boolean>(propName: P, format: U): resultType<U> {
    //     let totalValue = [...this.items.values()].reduce((t, item) => t += Number(item[propName]), 0);
    //     return format ? `$${totalValue.toFixed()}` : totalValue as any;
    // }
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
console.log();
function FilterArray(data, predicate) {
    return data.filter(item => !predicate(item));
}
let dataArray = [new Product("Kayak", 275), new Person("Bob", "London"), new Product("Lifejacket", 27.50), new City("Paris", 2141000)];
function isProductOrCity(item) {
    return item instanceof Product || item instanceof City;
}
let filteredData = FilterArray(dataArray, isProductOrCity);
filteredData.forEach(item => console.log(`Person: ${item.name}`));
function convertProduct(p) {
    return { name: p.name, price: `$${p.price.toFixed(2)}` };
}
let kayak = convertProduct(new Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);
function total(data, propName) {
    return data.reduce((t, item) => t += Number(item[propName]), 0);
}
console.log(`Total: ${total(products, "price")}`);
function getValue(data, propName) {
    if (Array.isArray(data)) {
        return data[0][propName];
    }
    else {
        return data[propName];
    }
}
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
function processArray(data, func) {
    return data.map(item => func(item));
}
let selectName = (p) => p.name;
let names = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));
