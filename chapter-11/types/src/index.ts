type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
        // no statements required
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = "fidel";

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
