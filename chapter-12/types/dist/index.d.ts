import { City, Person, Employee } from "./dataTypes.js";
declare class DataCollection<T extends {
    name: string;
}> {
    protected items: T[];
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
    add(newItem: T): void;
    getNames(): string[];
    getItem(index: number): T;
}
declare class SearchableCollection<T extends {
    name: string;
}> extends DataCollection<T> {
    constructor(initialItems: T[]);
    find(name: string): T | undefined;
}
export declare let peopleData: SearchableCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let empData: (Person & Employee)[];
export {};
