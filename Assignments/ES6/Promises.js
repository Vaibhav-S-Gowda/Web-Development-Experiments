console.log("\n12. Promises");

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));