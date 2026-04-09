let add = function(x, y) {
    return x + y;
}
console.log(add(10, 20));

let sum = (x, y) => x + y;
console.log(sum(50, 20));

console.log("\nMultiple parameters processing");
let numbers = [4, 2, 6];
numbers.sort(function(a, b) {
    return b - a;
})
console.log(numbers);

console.log("\nArrow functions systax - Multiple parameters processing");
let numbers1 = [7, 8, 9];
numbers1.sort((a, b) => b - a);
console.log(numbers1);