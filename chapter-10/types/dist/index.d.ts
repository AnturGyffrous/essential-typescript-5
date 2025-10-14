declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
type Product = {
    id: number;
    name: string;
    price?: number;
    hasFeature?(feature: Feature): boolean;
};
type Person = {
    id: string;
    name: string;
    city: string;
    contact: number;
};
type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: string;
};
type EmployedPerson = Person & Employee;
declare let typeTest: never;
