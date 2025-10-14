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
};
type Employee = {
    id: string;
    company: string;
    dept: string;
};
type EmployedPerson = Person & Employee;
declare let hat: {
    id: number;
    name: string;
    price: number;
};
declare let gloves: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella: {
    id: number;
    name: string;
    price: number;
    hasFeature: (feature: Feature) => boolean;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare let dataItems: (Product | Person)[];
declare function isPerson(testObj: any): testObj is Person;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
declare let people: Person[];
declare let employees: Employee[];
declare let employedPeople: EmployedPerson[];
