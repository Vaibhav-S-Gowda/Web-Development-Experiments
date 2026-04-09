class Student {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let stu = new Student('Virat Kohli');
console.log(stu);

stu.setName('M. S. Dhoni');
console.log(stu.getName());