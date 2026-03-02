// combining Default and named Exports

export default class Person {
    constructor(name) {
        this.name = name;
    }
    sayhello() {
        return `Hello, I am ${this.name}` ;
    }
}

export const greet1 = (name) => `Hi, ${name} !`;
export const node = (number) => `This is my ${number}`