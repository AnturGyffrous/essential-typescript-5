let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
console.log();
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
// let price = 100;
// let taxAmount = calculateTax(price, false);
// let halfShare = taxAmount / 2;
// let personVal = calculateTax("Bob");
// console.log(`Full amount in tax: ${taxAmount}`);
// console.log(`Half share: ${halfShare}`);
// console.log(`Name: ${personVal}`);
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
