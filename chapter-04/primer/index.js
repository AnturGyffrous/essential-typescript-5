let Product = function (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function (name, price, taxRate) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function () {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function () {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

console.log(hat.toTaxString());
console.log(boots.toString());
console.log(`hat and TaxedProduct: ${hat instanceof TaxedProduct}`);
console.log(`hat and Product: ${hat instanceof Product}`);
console.log(`boots and TaxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots and Product: ${boots instanceof Product}`);

Product.process = (...products) =>
    products.forEach(p => p instanceof TaxedProduct
        ? console.log(p.toTaxString())
        : console.log(p.toString()));

Product.process(new TaxedProduct("Hat", 100, 1.2), new Product("Boots", 100));
