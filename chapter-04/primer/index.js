class Product {
    constructor(name, price) {
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

function createProductIterator() {
    const hat = new Product("Hat", 100);
    const boots = new Product("Boots", 100);
    const umbrella = new Product("Umbrella", 23);

    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false };
                case hat:
                    lastVal = boots;
                    return { value: boots, done: false };
                case boots:
                    lastVal = umbrella;
                    return { value: umbrella, done: false };
                case umbrella:
                    return {
                        value: undefined, done: true
                    }
            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}
