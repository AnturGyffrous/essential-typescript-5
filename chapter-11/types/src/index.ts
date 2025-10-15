class Person {
    constructor(public id: string, public name: string, public city: string) { }
};

class Employee extends Person {
    // private city: string

    constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
        super(id, name, city)
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }

    // get location() {
    //     switch (this.city) {
    //         case "Paris":
    //             return "France";
    //         case "London":
    //             return "UK";
    //         default:
    //             return this.city;
    //     }
    // }
    // get details() {
    //     return `${this.name}, ${this.dept}, ${this.location}`;
    // }

    // accessor salary: number = 100_000;
};

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
