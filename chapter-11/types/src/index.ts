interface Person {
    name: string;
    getDetails(): string;
};

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
};

class Employee implements Person {
    constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
    }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
};

class Customer implements Person, DogOwner {
    constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number, public dogName: string) { }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }

    getDogDetails() {
        return `${this.name} has a dog names ${this.dogName}`;
    }
}

class Supplier implements Person {
    constructor(public readonly id: string, public name: string, public city: string, public companyName: string) {
    }

    getDetails() {
        return `${this.name} works for ${this.companyName}`;
    }
}

let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");

let dogOwners: DogOwner[] = [alice];
dogOwners.forEach(item => console.log(item.getDogDetails()));

let data: Person[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    alice
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => console.log(item.getDetails()));
