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
    getContact(field: string): string;
};
type Employee = {
    id: string;
    company: string;
    dept: string;
    getContact(field: number): number;
};
type EmployedPerson = Person & Employee;
declare let person: EmployedPerson;
declare let typeTest: ((field: string) => string) & ((field: number) => number);
declare let stringParamTypeTest: string;
declare let numberParamTypeTest: number;
