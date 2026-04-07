function createMachine(name, status) {
    return {
        name: name,
        status: status
    }
}
console.log(createMachine("Google", true))

const m1 = {
    name: "Drill",
    status: "Active",
};
console.log(m1)

const m2 = {
    name: "Grill",
    status: "Inactive",
};
console.log(m2)

// With function (dynamic creation)
const var1 = createMachine("Kill", "Active");
const var2 = createMachine("Bill", "Inactive");
console.log(var1, var2);