const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const axios = require('axios');

// endpoint API for get cities info
app.get('/api/cities-info', getCityWeather, (req, res) => {
    console.log(req.results);
    console.log('New GET request to API route');
})

// initialize variables
const cities = ['torino', 'milano', 'roma', 'napoli', 'palermo']
urlWeather = 'https://api.openweathermap.org/data/2.5/weather'
keyForWeatherApi = process.env.API_WEATHER_KEY
urlBusinesses = 'https://api.yelp.com/v3/businesses/search'
keyForYelpApi = process.env.API_YELP_KEY
const results = {};

/**
 * Fetch data from openweathermap.org API for every element of cities array
 * and save the data in results object
 * 
 */
function getCityWeather(req, res, next) {
    var prom = new Promise((resolve, reject) => {
        cities.forEach((city) => {
            axios.get(`${urlWeather}?q=${city}&units=metric&appid=${keyForWeatherApi}`)
            .then(r => {
                results[`${city}`] = {}
                results[`${city}`].weather = r.data
                if (cities.length === Object.keys(results).length){
                    resolve()
                }
          
                })
            })
            .catch((error) => {
                console.error(error)
            })
        })
    prom.then(() => {
        req.results = results;
        next();
    })
  }



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})