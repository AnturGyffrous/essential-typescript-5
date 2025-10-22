import { City, Person, Product, Employee } from "./dataTypes.js";
let people = [new Person("Bob Smith", "London"), new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"), new Employee("Alice Jones", "Sales")];
class ArrayCollection {
    items = [];
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm);
    }
}
class PersonCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm || item.city == searchTerm);
    }
}
class DataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getItem(index) {
        return this.items[index];
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
}
// class SearchableCollection<T extends Employee | Person> extends DataCollection<T> {
//     constructor(initialItems: T[]) {
//         super(initialItems);
//     }
//     find(searchTerm: string): T[] {
//         return this.items.filter(item => {
//             if (item instanceof Employee) {
//                 return item.name === searchTerm || item.role === searchTerm;
//             } else if (item instanceof Person) {
//                 return item.name === searchTerm || item.city === searchTerm;
//             }
//         });
//     }
// }
export let peopleData = new DataCollection(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
let productData = new DataCollection(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log();
export let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
export let empData = peopleData.collate(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
// let employeeData = new SearchableCollection<Employee>(employees)
// employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
console.log();
let reversedCities = DataCollection.reverse(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));
console.log();
let peopleCollection = new PersonCollection();
peopleCollection.add(...people);
let productCollection = new ProductCollection();
productCollection.add(...products);
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
