function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

const people = [
    { name: 'Rameshwara', age: 21},
    { name: 'Manohar', age: 20},
    { name: 'Prakruthi', aage: 23}
];

console.log(sortByAge(people));