export class City {
    name;
    population;
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
    getSummary() {
        return `Name: ${this.name}, Price $${this.population}`;
    }
}
