declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let hat: [string, number, number?, ...number[]];
declare let gloves: [string, number, number?, ...number[]];
declare let items: [string, number, number?, ...number[]][];
declare let tupleUnion: ([string, number, number?, ...number[]] | boolean)[];
declare enum OtherEnum {
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
