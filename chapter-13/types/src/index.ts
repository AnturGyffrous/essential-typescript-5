import { City, Person, Product, Employee } from "./dataTypes.js";

type CustomMapped<K extends keyof any, T> = {
    [P in K]: T
};

let p1: CustomMapped<"name" | "city", string> = { name: "Bob", city: "London" };
let p2: Record<"name" | "city", string> = { name: "Alice", city: "Paris" };
console.log(`Custom mapped type: ${p1.name}, ${p1.city}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.city}`);

console.log();

type resultType<T extends boolean> = T extends true ? string : number;

let firstBoolVal: resultType<true> = "String value";
let secondBoolVal: resultType<false> = 100;

type references = "London" | "Bob" | "Kayak";

type nestedType<T extends references> = T extends "London" ? City : T extends "Bob" ? Person : Product;

let firstVal: nestedType<"London"> = new City("Paris", 2141000);
let secondVal: nestedType<"Bob"> = new Person("Alice", "Paris");
let thirdVal: nestedType<"Kayak"> = new Product("Running Shoes", 100);

let products = [new Product("Running Shoes", 100), new Product("Hat", 25), new Product("Lifejacket", 48.95)];

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

    // total<P extends keyof T, U extends boolean>(propName: P, format: U): resultType<U> {
    //     let totalValue = [...this.items.values()].reduce((t, item) => t += Number(item[propName]), 0);
    //     return format ? `$${totalValue.toFixed()}` : totalValue as any;
    // }

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

console.log();

// let firstGenericVal: string = productCollection.total("price", true);
// console.log(`Formatted value: ${firstGenericVal}`);
// let secondGenericVal: number = productCollection.total("price", false);
// console.log(`Unformatted value: ${secondGenericVal}`);

type Exclude<T, U> = T extends U ? never : T;

function FilterArray<T, U>(data: T[], predicate: (item) => item is U): Exclude<T, U>[] {
    return data.filter(item => !predicate(item)) as any;
}

let dataArray = [new Product("Kayak", 275), new Person("Bob", "London"), new Product("Lifejacket", 27.50), new City("Paris", 2141000)];

function isProductOrCity(item: any): item is Product | City {
    return item instanceof Product || item instanceof City;
}

let filteredData: Person[] = FilterArray(dataArray, isProductOrCity);
filteredData.forEach(item => console.log(`Person: ${item.name}`));

type changeProps<T, U, V> = {
    [P in keyof T]: T[P] extends U ? V : T[P]
};

type modifiedProduct = changeProps<Product, number, string>;

function convertProduct(p: Product): modifiedProduct {
    return { name: p.name, price: `$${p.price.toFixed(2)}` };
}

let kayak = convertProduct(new Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);

type unionOfTypeNames<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
};

type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];

function total<T, P extends propertiesOfType<T, number>>(data: T[], propName: P): number {
    return data.reduce((t, item) => t += Number(item[propName]), 0);
}

console.log(`Total: ${total(products, "price")}`);

type targetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;

function getValue<T, P extends targetKeys<T>>(data: T, propName: P): T[P] {
    if (Array.isArray(data)) {
        return data[0][propName];
    } else {
        return data[propName];
    }
}

console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
