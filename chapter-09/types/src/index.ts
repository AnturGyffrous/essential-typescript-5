function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

hat.forEach((h: string | number) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    } else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});

console.log();

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);
