;
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
class Customer {
    id;
    name;
    city;
    creditLimit;
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
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
let data = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)
];
data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
data.forEach(item => console.log(item.getDetails()));
