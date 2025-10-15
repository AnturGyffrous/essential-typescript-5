type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    private city: string

    constructor(public readonly id: string, public name: string, private dept: string, city: string) {
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }

    get location() {
        switch (this.city) {
            case "Paris":
                return "France";
            case "London":
                return "UK";
            default:
                return this.city;
        }
    }
    get details() {
        return `${this.name}, ${this.dept}, ${this.location}`;
    }
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
console.log(`Location: ${salesEmployee.location}`);
console.log(`Details: ${salesEmployee.details}`);

console.log();

let data: (Person | Employee)[] = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];

data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
