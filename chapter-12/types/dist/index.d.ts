import { City, Person, Employee } from "./dataTypes.js";
declare class DataCollection<T> {
    protected items: T[];
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
    add(newItem: T): void;
    getItem(index: number): T;
    filter<V extends T>(predicate: (target: any) => target is V): V[];
}
export declare let peopleData: DataCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let empData: (Person & Employee)[];
export {};
