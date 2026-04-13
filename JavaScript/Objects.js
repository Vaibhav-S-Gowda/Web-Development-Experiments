let john = { name: 'John Doe', age: 23},
lily = { name: 'Lily Bush'},
peter = { name: 'Peter Drucker'};

let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber'],
]);

for (const [user, role] of userRoles) {
    console.log(`${user.name} : ${role}`);
}

for (let role of userRoles.values()) {
    console.log(role);
}