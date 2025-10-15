type Person = {
    id: string;
    name: string;
    city: string;
};
declare class Employee {
    readonly id: string;
    name: string;
    private dept;
    private city;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
    get location(): string;
}
declare let salesEmployee: Employee;
declare let data: (Person | Employee)[];
