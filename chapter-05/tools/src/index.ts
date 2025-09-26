let printMessage = (msg: string)
    : void => console.log(`Message: ${msg}`);

printMessage("Hello, TypeScript");

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));
