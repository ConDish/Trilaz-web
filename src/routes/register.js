// --- Imports
const express = require('express');
const router = express.Router();



// --- Render register
router.get('/', (req, res) => {

    res.render('register', {
        title: "Register"
    })

})




// --- Exporting router
module.exports = router;