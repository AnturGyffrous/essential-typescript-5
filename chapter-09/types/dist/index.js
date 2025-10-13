function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100, 10, 1.20, 3, 0.95];
let gloves = ["Gloves", 75, 10];
[hat, gloves].forEach(tuple => {
    let [name, price, taxRate, ...coupons] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
});
console.log();
let items = [["Hat", 100], ["Gloves", 75]];
let tupleUnion = [true, false, hat, ...items];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        let [str, num] = elem;
        console.log(`Name: ${str}`);
        console.log(`Price: ${num.toFixed(2)}`);
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});
console.log();
[10 /* OtherEnum.First */, 20 /* OtherEnum.Two */].forEach(val => {
    console.log(`Other Enum Number value: ${val}`);
});
var Product;
(function (Product) {
    Product[Product["Hat"] = 11] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 31] = "Umbrella";
})(Product || (Product = {}));
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
});
console.log();
let productValue = 11;
let productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
console.log();
productValue = Product.Hat;
if (typeof productValue) {
    console.log("Value is a number");
}
let unionValue = Product.Hat;
if (typeof unionValue) {
    console.log("Value is a number");
}
console.log();
let products = [[Product.Hat, 100], [Product.Gloves, 75]];
products.forEach((prod) => {
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
});
console.log();
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
})(City || (City = {}));
console.log(`City: ${City.London}`);
console.log();
let restrictedValue = 1;
let secondValue = 1;
restrictedValue = secondValue;
console.log(`Restricted Value: ${restrictedValue}`);
function calculatePrice(quantity, price) {
    return quantity * price;
}
console.log();
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
function getMixedValue(input) {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}
let first = getMixedValue(1);
let second = getMixedValue(2);
let third = getMixedValue(4);
console.log(`${first}, ${second}, ${third}`);
function getCityString(city) {
    return `City: ${city}`;
}
let str = getCityString("London");
console.log(str);
