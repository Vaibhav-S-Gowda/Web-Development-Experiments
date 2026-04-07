let scores = [80, 90, 70];

for (let score of scores) {
    score += 5;
    console.log(score);
}

for (let score in scores) {
    // score += 5;
    console.log(score);
}

const arr = [10, 20, 30];

for (let i in arr) {
    console.log(i);
}