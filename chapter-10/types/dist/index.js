var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let typeTest = {}.contact;
let person1 = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales", contact: { name: "Alice", phone: 6512346543 }
};
let person2 = {
    id: "dpeters", name: "Dora Peters", city: "New York",
    company: "Acme Co", dept: "Development", contact: { name: "Alice", phone: 6512346543 }
};
// let hat = { id: 1, name: "Hat", price: 100 };
// let gloves = { id: 2, name: "Gloves", price: 75 };
// let umbrella = { id: 3, name: "Umbrella", price: 30, hasFeature: (feature: Feature) => feature === Feature.Waterproof };
// let bob = { id: "bsmith", name: "Bob", city: "London", company: "Acme Co", dept: "Sales" };
// let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
// function isPerson(testObj: any): testObj is Person {
//     return testObj.city !== undefined;
// }
// dataItems.forEach(item => {
//     if (isPerson(item)) {
//         console.log(`Person: ${item.name}, City: ${item.city}`);
//     } else {
//         console.log(`Product: ${item.name}, Price: ${item.price}`);
//     }
// });
// console.log();
// function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[] {
//     const defaults = { company: "None", dept: "None" };
//     return peopleData.map(p => ({ ...p, ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
// }
// let people: Person[] =
//     [{ id: "bsmith", name: "Bob Smith", city: "London" },
//     { id: "ajones", name: "Alice Jones", city: "Paris" },
//     { id: "dpeters", name: "Dora Peters", city: "New York" }];
// let employees: Employee[] =
//     [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
//     { id: "dpeters", company: "Acme Co", dept: "Development" }];
// let employedPeople: EmployedPerson[] = correlateData(people, employees);
// function writePerson(per: Person): void {
//     console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
// }
// function writeEmployee(emp: Employee): void {
//     console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
// }
// employedPeople.forEach(item => {
//     writePerson(item);
//     writeEmployee(item);
// })
