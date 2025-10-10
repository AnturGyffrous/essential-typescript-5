function check(expression: boolean): asserts expression {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function calculateTax(amount: number, discount?: number, ...extraFees: number[]): number
function calculateTax(amount: null, discount?: number, ...extraFees: number[]): null
function calculateTax(amount: number | null, discount: number = 0, ...extraFees: number[]): number | null {
    check(typeof amount == "number");
    return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxValue: number | null = calculateTax(100);
writeValue("Tax value", taxValue);
taxValue = calculateTax(100, 0);
writeValue("2 args", taxValue);
taxValue = calculateTax(100);
writeValue("1 arg", taxValue);
taxValue = calculateTax(100, 10, 20);
writeValue("3 args", taxValue);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
writeValue("6 args", taxValue);
