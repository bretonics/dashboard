// API Routes
const router = require('express').Router();

// Require Routes
const weatherRoute = require('./weather');
const userRoute = require('./user');

// Root API Route
router.get('/', (req, res) => { res.status(401).send("Not allowed"); });

// Use Specified Routes
router.use('/weather', weatherRoute);
router.use('/user', userRoute);

// Export Routes
module.exports = router;