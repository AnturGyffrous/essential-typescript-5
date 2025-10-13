function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number, number?] = ["Hat", 100];
let gloves: [string, number, number?] = ["Gloves", 75, 10];

[hat, gloves].forEach(tuple => {
    let [name, price, taxRate] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    writePrice(name, price);
})

console.log();

let products: [string, number, number?][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number, number?] | boolean)[] = [true, false, hat, ...products];
tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) {
        let [str, num] = elem;
        console.log(`Name: ${str}`);
        console.log(`Price: ${num.toFixed(2)}`);
    } else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});
