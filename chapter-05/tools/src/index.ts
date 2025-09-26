import { sum } from "./calc.js";

let printMessage = (msg: string)
    : void => console.log(`Message: ${msg}`);

printMessage("Hello, TypeScript");

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
