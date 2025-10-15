class Person {
    id;
    name;
    city;
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
;
class Employee extends Person {
    id;
    name;
    dept;
    city;
    // private city: string
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
;
// let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
// salesEmployee.writeDept();
// console.log(`Location: ${salesEmployee.location}`);
// console.log(`Details: ${salesEmployee.details}`);
// console.log(`Salary: ${salesEmployee.salary}`);
let data = [
    new Person("bsmith", "Bob Smith", "London"),
    new Employee("fvega", "Fidel Vega", "Sales", "Paris")
];
data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    }
});
