declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let hat: [string, number, number?, ...number[]];
declare let gloves: [string, number, number?, ...number[]];
declare let items: [string, number, number?, ...number[]][];
declare let tupleUnion: ([string, number, number?, ...number[]] | boolean)[];
declare enum Product {
    Hat = 0,
    Gloves = 20,
    Umbrella = 21
}
declare let productValue: Product;
declare let productName: string;
declare let products: [Product, number][];
