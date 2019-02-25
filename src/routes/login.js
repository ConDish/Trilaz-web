// --- Imports
const express = require('express');
const router = express.Router();



// --- Render register
router.get('/', (req, res) => {

    res.render('login', {
        title: "Sign in"
    })

})




// --- Exporting router
module.exports = router;