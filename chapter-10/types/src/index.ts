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

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30, hasFeature: (feature: Feature) => feature === Feature.Waterproof };
let bob = { id: "bsmith", name: "Bob", city: "London" };

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
