import calcTax from "./tax.js"

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, ${this.#getDetail()}`;
    }

    #getDetail() {
        return `Tax: ${this.getPriceIncTax()}`;
    }

    static process(...products) {
        products.forEach(p => console.log(p.toString()));
    }
}

TaxedProduct.process(
    new TaxedProduct("Hat", 100),
    new TaxedProduct("Boots", 100, 1.3));

class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }

    *[Symbol.iterator]() {
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat", 100),
    new Product("Boots", 100), new Product("Umbrella", 23));

console.log(`Total price: ${winter.getTotalPrice()}`);

[...winter].forEach(p => console.log(`Product: ${p}`));

class Supplier {
    constructor(name, productIds) {
        this.name = name;
        this.productIds = productIds;
    }
}

let product = new Product("Hat", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
    productArray.push(product);
    productSet.add(product);
}

console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);

let taxedPrice = calcTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
