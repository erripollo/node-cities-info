const express = require('express');
const router = express.Router();
const { getCityWeather, getCityBusinesses } = require('../controllers/fetch-data')

// endpoint API for get cities info
router.get('/cities-info', getCityWeather, getCityBusinesses, (req, res) => {
    res.json(req.results)
    console.log('New GET request to API route');
})

module.exports = router;