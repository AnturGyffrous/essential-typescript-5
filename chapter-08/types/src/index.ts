function calculateTax(amount: number | null, discount: number = 0, ...extraFees: number[]): number | null {
    if (amount != null) {
        return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
    }
    return null;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxValue: number | null = calculateTax(100);
if (typeof taxValue === "number") {
    writeValue("Tax value", taxValue);
}
taxValue = calculateTax(100, 0);
if (typeof taxValue === "number") {
    writeValue("2 args", taxValue);
}
taxValue = calculateTax(100);
if (typeof taxValue === "number") {
    writeValue("1 arg", taxValue);
}
taxValue = calculateTax(100, 10, 20);
if (typeof taxValue === "number") {
    writeValue("3 args", taxValue);
}
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
if (typeof taxValue === "number") {
    writeValue("6 args", taxValue);
}
