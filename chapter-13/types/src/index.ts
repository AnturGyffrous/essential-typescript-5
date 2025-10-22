import { City, Person, Product, Employee } from "./dataTypes.js";

type MappedProduct = {
    [P in keyof Product]: Product[P]
};

let p: MappedProduct = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

type AllowStrings = {
    [P in keyof Product]: Product[P] | string
}
let q: AllowStrings = { name: "Kayak", price: "apples" };
console.log(`Changed type # 1: ${q.name}, ${q.price}`);

type ChangeNames = {
    [P in keyof Product as `${P}Property`]: Product[P]
}
let r: ChangeNames = { nameProperty: "Kayak", priceProperty: 12 };
console.log(`Changed type # 2: ${r.nameProperty}, ${r.priceProperty}`);

console.log();

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class Collection<T, K extends keyof T> implements Iterable<T> {
    private items: Map<T[K], T>;

    constructor(initialItems: T[] = [], private propertyName: K) {
        this.items = new Map<T[K], T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }

    get(key: T[K]): T {
        return this.items.get(key);
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection = new Collection(products, "price");
console.log(`There are ${productCollection.count} products`);

let itemByKey = productCollection.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
