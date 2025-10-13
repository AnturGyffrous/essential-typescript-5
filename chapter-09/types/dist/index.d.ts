declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let hat: [string, number, number?, ...number[]];
declare let gloves: [string, number, number?, ...number[]];
declare let items: [string, number, number?, ...number[]][];
declare let tupleUnion: ([string, number, number?, ...number[]] | boolean)[];
declare const enum OtherEnum {
    First = 10,
    Two = 20
}
declare enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let productValue: Product;
declare let productName: string;
declare let unionValue: number | Product;
declare let products: [Product, number][];
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare let restrictedValue: 1 | 2 | 3;
declare let secondValue: 1 | 10 | 100;
declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare let total: number;
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare function getMixedValue(input: 1): 1;
declare function getMixedValue(input: 2 | 3): "Hello" | true;
declare function getMixedValue(input: 4): City.London;
declare let first: 1;
declare let second: true | "Hello";
declare let third: City.London;
declare function getCityString(city: "London" | "Paris" | "Chicago"): `City: ${"London" | "Paris" | "Chicago"}`;
declare let str: "City: London" | "City: Paris" | "City: Chicago";
