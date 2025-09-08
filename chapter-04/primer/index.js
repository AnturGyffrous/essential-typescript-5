let Product = function (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

console.log(hat.toString());
console.log(boots.toString());
