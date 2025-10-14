enum Feature { Waterproof, Insulated }

type Product = {
    id: number,
    name: string,
    price?: number,
    hasFeature?(feature: Feature): boolean
};

type Person = {
    id: string,
    name: string,
    city: string
}

type Employee = {
    company: string,
    dept: string
};

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30, hasFeature: (feature: Feature) => feature === Feature.Waterproof };
let bob = { id: "bsmith", name: "Bob", city: "London", company: "Acme Co", dept: "Sales" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined;
}

dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}, City: ${item.city}`);
    } else {
        console.log(`Product: ${item.name}, Price: ${item.price}`);
    }
});

console.log();

let people: (Person & Employee)[] = [bob];

people.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
})
