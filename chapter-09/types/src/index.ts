function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

let [hatName, hatPrice] = hat;

console.log(`Name: ${hatName}`);
console.log(`Price: ${hatPrice.toFixed(2)}`);

console.log();

writePrice(gloves[0], gloves[1]);
