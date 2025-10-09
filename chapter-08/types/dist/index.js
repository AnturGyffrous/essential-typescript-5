function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}
let taxValue = calculateTax(100, 0);
console.log(`Total Amount: ${taxValue}`);
