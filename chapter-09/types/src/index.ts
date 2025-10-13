function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number, number?, ...number[]] = ["Hat", 100, 10, 1.20, 3, 0.95];
let gloves: [string, number, number?, ...number[]] = ["Gloves", 75, 10];

[hat, gloves].forEach(tuple => {
    let [name, price, taxRate, ...coupons] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
})

console.log();

let items: [string, number, number?, ...number[]][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number, number?, ...number[]] | boolean)[] = [true, false, hat, ...items];
tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) {
        let [str, num] = elem;
        console.log(`Name: ${str}`);
        console.log(`Price: ${num.toFixed(2)}`);
    } else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});

console.log();

const enum OtherEnum { First = 10, Two = 20 }

[OtherEnum.First, OtherEnum.Two].forEach(val => {
    console.log(`Other Enum Number value: ${val}`)
})

enum Product {
    Hat = OtherEnum.First + 1,
    Gloves = 20,
    Umbrella = Hat + Gloves
}

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
});

console.log();

let productValue: Product = 11;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);

console.log();

productValue = Product.Hat;
if (typeof productValue) {
    console.log("Value is a number");
}

let unionValue: number | Product = Product.Hat;
if (typeof unionValue) {
    console.log("Value is a number");
}

console.log();

let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

products.forEach((prod: [Product, number]) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
})

console.log();

enum City { London = "London", Paris = "Paris", NY = "New York" }
console.log(`City: ${City.London}`);

console.log();

let restrictedValue: 1 | 2 | 3 = 1;
let secondValue: 1 | 10 | 100 = 1;

restrictedValue = secondValue;

console.log(`Restricted Value: ${restrictedValue}`);

function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

console.log();

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
}

function getMixedValue(): 1 | "Hello" | true | City.London {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}

console.log(`Value: ${getMixedValue()}`);
