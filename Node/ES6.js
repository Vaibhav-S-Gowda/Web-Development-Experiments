var msg = "Hello Guys!!"
console.log(msg)

// Default parameters
function say(message = "Come In") {
    console.log(message);
}

say();
say('Yello')

// rest parameter
function fun(a = 30, b = 20, ...args) {
    console.log(a)
    console.log(b)
    console.log( a, b, args)
}

fun(1, 2, 3, "A", "Bird", "Can", "Fly");