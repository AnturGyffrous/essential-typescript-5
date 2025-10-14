var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30, hasFeature: (feature) => feature === Feature.Waterproof };
let bob = { id: "bsmith", name: "Bob", city: "London", company: "Acme Co", dept: "Sales" };
let dataItems = [hat, gloves, umbrella, bob];
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}, City: ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}, Price: ${item.price}`);
    }
});
console.log();
function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({ ...p, ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id } }));
}
let people = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees = [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];
let employedPeople = correlateData(people, employees);
function writePerson(per) {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}
function writeEmployee(emp) {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}
employedPeople.forEach(item => {
    writePerson(item);
    writeEmployee(item);
});
