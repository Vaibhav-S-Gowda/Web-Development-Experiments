const express = require('express');
const app = express();
const PORT = 3000;

const router0 = express.Router();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router0.get('/', function (req, res, next) {
    console.log("Home Page for section A students (command prompt)");
    res.send("Home page for section A students");
});

router1.get('/secB', function (req, res, next) {
    console.log("Home Page for section B students (command prompt)");
    res.send("Home page for section B students");
});

router2.get('/secC', function (req, res, next) {
    console.log("Home Page for section C students (command prompt)");
    res.send("Home page for section C students");
});

router3.get('/secD', function (req, res, next) {
    console.log("Home Page for section D students (command prompt)");
    res.send("Home page for section D students");
});

app.use(router0);
app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT, (err) => {
    if(err) {
        console.error("Error starting server: ", err);
    } else {
        console.log(`Server listening on PORT ${PORT}`);
    }
});