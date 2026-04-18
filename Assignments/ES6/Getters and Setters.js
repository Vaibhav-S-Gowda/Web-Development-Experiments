console.log("\n10. Getters and Setters");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions(value) {
        [this.width, this.height] = value.split(",");
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area);

rect.dimensions = "20,30";
console.log(rect.area);