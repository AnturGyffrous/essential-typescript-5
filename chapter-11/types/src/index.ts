interface Person {
    name: string;
    getDetails(): string;
};

class Employee implements Person {
    constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
    }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
};

class Customer implements Person {
    constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number) { }

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

let data: Person[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => console.log(item.getDetails()));
