/*1.    while (condition) → executes until condition becomes false
2.  for (init; condition; increment) → includes variable declaration scope
3.  do...while → executes at least once
4.  switch → multiple condition handling
5.  break → stops loop/switch
6.  continue → skips current iteration
7.  window object → alert(), innerWidth, innerHeight
*/
function runProgram() {
    let output = "";

    // WHILE LOOP
    output += "<h3>While Loop:</h3>";
    let i = 1;
    while (i <= 5) {
        output += "Number: " + i + "<br>";
        i++;
    }

    // FOR LOOP (with declaration scope)
    output += "<h3>For Loop:</h3>";
    for (let j = 1; j <= 5; j++) {
        if (j === 3) {
            continue; // skip 3
        }
        if (j === 5) {
            break; // stop at 5
        }
        output += "Value: " + j + "<br>";
    }

    // DO-WHILE LOOP
    output += "<h3>Do While Loop:</h3>";
    let k = 1;
    do {
        output += "Count: " + k + "<br>";
        k++;
    } while (k <= 3);

    // SWITCH STATEMENT
    output += "<h3>Switch Statement:</h3>";
    let day = new Date().getDay(); // using window object indirectly

    switch (day) {
        case 0:
            output += "Sunday";
            break;
        case 1:
            output += "Monday";
            break;
        case 2:
            output += "Tuesday";
            break;
        case 3:
            output += "Wednesday";
            break;
        case 4:
            output += "Thursday";
            break;
        case 5:
            output += "Friday";
            break;
        case 6:
            output += "Saturday";
            break;
        default:
            output += "Invalid Day";
    }

    // WINDOW OBJECT USAGE
    output += "<h3>Window Object:</h3>";
    output += "Window Width: " + window.innerWidth + "<br>";
    output += "Window Height: " + window.innerHeight + "<br>";

    alert("Program Executed Successfully!"); // window method

    document.getElementById("output").innerHTML = output;
}