// GitHub API Router
const router = require('express').Router();
const axios = require('axios');
const GitHub = require('../../models/GitHub');

// AccuGitHub API Routes

// API Route '/api/github'
router.get('/', (req, res) => {
    const apiKey = process.env.GITHUB_API_KEY;
    var instance = axios.create({
        baseURL: 'https://api.github.com',
        timeout: 1000,
        headers: { 'Authorization': `token ${apiKey}` }
    });

    instance.get('/users/bretonics')
        .then((response) => {
            console.log("Fetched GiHub API.");
            let data = response.data;
            let entry = { 'user': 'bretonics', 'response': data }
            const entryDB = new GitHub(entry);
            return entryDB.save().then(() => res.json(entryDB));
        })
        .catch((error) => {
            console.log("ERROR:", error);
        });
});


// Export Routes
module.exports = router;