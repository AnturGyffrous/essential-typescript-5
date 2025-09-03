let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

hatPrototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

console.log(hat.toString());
console.log(boots.toString());
