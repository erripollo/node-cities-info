const express = require('express');
const port = process.env.PORT || 3000;
require('dotenv').config()
const { getCityWeather, getCityBusinesses } = require('./controllers/fetch-data')

const app = express();

app.use('/api/cities-info', getCityWeather, getCityBusinesses)

// endpoint API for get cities info
app.get('/api/cities-info', (req, res) => {
    res.json(req.results)
    console.log('New GET request to API route');
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})