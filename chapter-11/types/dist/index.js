;
class AbstractDogOwner {
    getDogDetails() {
        if (this.dogName) {
            return `${this.name} has a dog names ${this.dogName}`;
        }
        else {
            return "";
        }
    }
}
class Employee {
    id;
    name;
    dept;
    city;
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
;
class DogOwningCustomer extends AbstractDogOwner {
    id;
    name;
    city;
    creditLimit;
    dogName;
    constructor(id, name, city, creditLimit, dogName) {
        super();
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        this.dogName = dogName;
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
class Supplier {
    id;
    name;
    city;
    companyName;
    constructor(id, name, city, companyName) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.companyName = companyName;
    }
    getDetails() {
        return `${this.name} works for ${this.companyName}`;
    }
}
class SportsProduct {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");
let shoes = new SportsProduct("Running Shoes", "Running", 90.50);
let data = [
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
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
console.log();
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shoes", shoes]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
let total = group.hat.price + (group.boots?.price ?? 0);
console.log(`Total: ${total}`);
