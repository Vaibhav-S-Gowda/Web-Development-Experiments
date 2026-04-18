console.log("\n11. Map");

const map = new Map();

map.set("name", "Alice");
map.set("age", 25);

console.log(map.get("name"));
console.log(map.has("age"));

for (let [key, value] of map) {
    console.log(key, value);
}