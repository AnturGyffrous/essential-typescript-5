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
let taxBoolean = calculateTax(100, false);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);
console.log();
let taxValue = calculateTax(100, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        let value = taxValue;
        console.log(`Unexpected type of value: ${value}`);
}
console.log();
let newResult = calculateTax(200, false);
let myNumber = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);
