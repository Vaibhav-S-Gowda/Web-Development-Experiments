console.log("\n9. ES6 Classes");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const p1 = new Person("John", 25);
p1.display();