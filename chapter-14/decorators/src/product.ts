import { time } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";
import { double } from "./fieldDecorator.js";

@serialize
export class Product {
    @double
    private taxRate: number = 20;

    constructor(public name: string, public price: number) { }

    @time
    getDetails(): string {
        return `Name: ${this.name}, Price $${this.getPrice()}`;
    }

    @time
    getPrice(): number {
        return this.price * (1 + (this.taxRate / 100));
    }
}
