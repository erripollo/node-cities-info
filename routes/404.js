const express = require('express');
const router = express.Router();

// route for manage pages not found
router.get('*', (req, res) => {
    res.status(404).send('Page not found!')
})

module.exports = router;