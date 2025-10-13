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
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
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
