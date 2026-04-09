function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}
var kalam = new Person("APJ Abdul Kalam");
console.log(kalam.getName());

class person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name.toUpperCase();
    }
}

let p = new person("Shanmukha");
console.log(p.name);