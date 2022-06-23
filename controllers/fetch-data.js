const axios = require('axios');
require('dotenv').config()

// initialize variables
const cities = ['torino', 'milano', 'roma', 'napoli', 'palermo']
urlWeather = 'https://api.openweathermap.org/data/2.5/weather'
urlBusinesses = 'https://api.yelp.com/v3/businesses/search'
keyForWeatherApi = process.env.API_WEATHER_KEY
keyForYelpApi = process.env.API_YELP_KEY
const results = {};

/**
 * Fetch data from openweathermap.org API for every element of cities array,
 * save the data in results object and send results through req
 * 
 */
 function getCityWeather(req, res, next) {
    var prom = new Promise((resolve, reject) => {
        // fetch a weather data for every cities
        cities.forEach((city) => {
            axios.get(`${urlWeather}?q=${city}&units=metric&appid=${keyForWeatherApi}`)
            .then(r => {
                // save the weather data in results object
                results[`${city}`] = {}
                results[`${city}`].weather = r.data
                if (cities.length === Object.keys(results).length){
                    resolve()
                }
            })
            .catch((error) => {
                console.error(error)
            })
        })
    })

    prom.then(() => {
        req.results = results;
        next();
    })
}

/**
 * Fetch data from yelp.com API for every element of cities array,
 * save the data in results object and send results through req
 * 
 */
 function getCityBusinesses(req, res, next) {
    const results = req.results;
    var prom = new Promise((resolve, reject) => {
        i = 0
        // fetch a businesses data for every cities
        cities.forEach(city => {
            axios.get(`${urlBusinesses}?location=${city}&limit=5&open_now=true`,{
                headers: {
                    Authorization: `Bearer ${keyForYelpApi}`
                }
            })
            .then(r => {
                i++
                // save the businesses data in results object
                results[`${city}`].businesses = r.data.businesses;
                if (i === cities.length){
                    resolve()
                }
            })
            .catch((error) => {
                console.error(error)
            })
        })
    })

    prom.then(() => {
        req.results = results;
        next();
    })
}

module.exports = {
    getCityWeather,
    getCityBusinesses
}