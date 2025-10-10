function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxValue = calculateTax(100, 0);
writeValue("Tax value", taxValue);
taxValue = calculateTax(100, 0);
writeValue("2 args", taxValue);
taxValue = calculateTax(100);
writeValue("1 arg", taxValue);
taxValue = calculateTax(100, 10, 20);
writeValue("3 args", taxValue);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
writeValue("6 args", taxValue);
