import { City } from "./city.js";
import { Product } from "./product.js";
import { isSerializeable } from "./classDecorator.js";
let city = new City("London", 8982000);
let product = new Product("Kayak", 275);
console.log(city.getSummary());
console.log(product.getDetails());
console.log(`Get Product tax: ${product.tax}`);
product.tax = 30;
if (isSerializeable(product)) {
    product.serialize();
}
