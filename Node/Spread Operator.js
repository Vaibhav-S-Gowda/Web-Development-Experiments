const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined);
const combined1 = [...odd, 2, 4, 6]
console.log(combined1);

const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b];
console.log(result);

const original = [1, 2, 3];
const new_arr = [...original];
console.log(new_arr);

function sum(a, b, c) {
    console.log(a + b + c);
}
const nums = [10, 20, 30];
sum(...nums);