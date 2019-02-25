// --- Imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// --- Settings
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// --- Api register
router.post('/register', (req, res) => {

    console.log(req.body);
    res.send("I am");

})



// --- Exporting router
module.exports = router;