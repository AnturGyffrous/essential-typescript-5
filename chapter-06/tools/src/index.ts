import { sum } from "./calc.js";

let printMessage = (msg: string)
    : void => console.log(`Message: ${msg}`);

let message = "Hello, TypeScript"
printMessage(message);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
