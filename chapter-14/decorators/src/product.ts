import { time } from "./methodDecorator.js";

export class Product {
    constructor(public name: string, public price: number) { }

    @time
    getDetails(): string {
        return `Name: ${this.name}, Price $${this.price}`;
    }

    @time
    getPrice(): number {
        return this.price;
    }
}
