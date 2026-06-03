const express = require('express');
const app = express()
const PORT = 3000

const router = express.Router();
router.get('/', (req, res) => {
    console.log("Express Router is working on command prompt");
    res.send("Express Router is working");
});

app.use(router)

app.listen(PORT, (err) => {
    if (err) {
        console.log("Express starting server: ", err);
    } else {
        console.log(`Server listening on PORT ${PORT}`);
    }
});