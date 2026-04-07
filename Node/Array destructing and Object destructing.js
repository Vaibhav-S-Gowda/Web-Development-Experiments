function getScores(params) {
    return [70, 80, 90, 100, 120, "xyz"];
}

let scores = getScores();

let x = scores[0], y = scores[1], z = scores[2];

let [a, b, ...args] = getScores();
console.log(a)
console.log(b)
console.log(args)

let {firstName: fname, lastName: lname} = personalbar;
console.log(fname);
console.log(lname);

let {FirstName, LastName} = personalbar;
console.log(FirstName);
console.log(LastName);
