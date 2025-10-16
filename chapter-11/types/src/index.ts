interface Person {
    name: string;
    getDetails(): string;

    dogName?: string;
    getDogDetails?(): string;
};

interface Product {
    name: string;
    price: number;
}

abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;

    abstract getDetails(): string;

    getDogDetails(): string {
        if (this.dogName) {
            return `${this.name} has a dog names ${this.dogName}`;
        } else {
            return "";
        }
    }
}

class Employee implements Person {
    constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
    }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
};

class DogOwningCustomer extends AbstractDogOwner {
    constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number, public dogName: string) {
        super();
    }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}

class Supplier implements Person {
    constructor(public readonly id: string, public name: string, public city: string, public companyName: string) {
    }

    getDetails() {
        return `${this.name} works for ${this.companyName}`;
    }
}

class SportsProduct implements Product {
    constructor(public name: string, public category: string, public price: number) { }
}

let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");
let shoes = new SportsProduct("Running Shoes", "Running", 90.50);

let data: (Person | Product)[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    shoes,
    alice
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`);
        if (item.getDogDetails) {
            console.log(`Person: ${item.getDogDetails()}`);
        }
    } else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});

console.log();

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }

    [propertyName: string]: Product;
}

let group = new ProductGroup(["shoes", shoes]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));

if (group.hat && group.boots) {
    let total = group.hat.price + group.boots.price;
    console.log(`Total: ${total}`);
}
