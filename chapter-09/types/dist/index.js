function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["Gloves", 75];
let [hatName, hatPrice] = hat;
console.log(`Name: ${hatName}`);
console.log(`Price: ${hatPrice.toFixed(2)}`);
console.log();
writePrice(gloves[0], gloves[1]);
