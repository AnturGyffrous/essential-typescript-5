let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

console.log();

function calculateTax(amount: number, format: boolean): string | number {
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

let taxNumber: string | number = calculateTax(100, false);
let taxString: string | number = calculateTax(100, true);

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
