// Weather API Router
const router = require('express').Router();
const axios = require('axios');

// AccuWeather API Routes

// API Route '/api/weather'
router.get('/', (req, res) => {
    const apiKey = process.env.ACWEATHER_API_KEY;
    var instance = axios.create({
        baseURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/348735',
        timeout: 1000,
        params: {
            apikey: apiKey
        },
    });

    instance.get('',)
        .then( (response) => {
            res.json(response.data);
        })
        .catch( (error) => {
            console.log("ERROR:", error);
        });

});


// Export Routes
module.exports = router;