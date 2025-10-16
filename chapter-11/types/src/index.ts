interface Person {
    name: string;
    getDetails(): string;

    dogName?: string;
    getDogDetails?(): string;
};

abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;

    abstract getDetails(): string;

    getDogDetails(): string {
        if (this.dogName) {
            return `${this.name} has a dog names ${this.dogName}`;
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

let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");

let data: Person[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    alice
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => {
    console.log(item.getDetails());
    if (item.getDogDetails) {
        console.log(item.getDogDetails());
    }
});
