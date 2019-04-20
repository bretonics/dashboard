const express = require('express');
const cors = require('cors');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan')('dev');
const cookieParser = require('cookie-parser')();
const mongoose = require("mongoose");
const dbConfig = require("./config/database");
// const passport =  require('./config/passport');
const routes = require('./routes');


// Environment Variables
const isDevelopmentMode = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const session = {
    // This is the secret used to sign the session ID cookie
    secret: "sdofu834nrviusber9q3ibervsdfivbah389bviacn",
    // Forces the session to be saved back to the session store, even if the session was never modified during the request
    resave: false,
    // Forces a session that is “uninitialized” to be saved to the store
    saveUninitialized: true,
    // will not require https:// on localhost
    cookie: { secure: false, maxAge: 60000 },
}
const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:8888'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,  // !important for Angular cookie sending
}


// Initialize app and define middleware
const app = express();
app.use(routes);
// app.use(passport);
app.use( bodyParser.urlencoded({ extended: true }) );   // parse request body content
app.use( expressSession(session) );
app.use( express.json() );
app.use( cors(corsOptions) );
app.use(morgan);
app.use(cookieParser);


// Setup/Config Database
const mongoURL = process.env.MONGODB_URI || dbConfig.url;
mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then( () => { 
        console.log(`${new Date().toUTCString()} - Successfully connected to MongoDB.`);
    }, err => { 
        console.log(`${new Date().toUTCString()} - Failed to connect to MongoDB.\n ${err.stack}`);
    }
);
mongoose.set('debug', isDevelopmentMode);
mongoose.Promise = global.Promise;  // Get Mongoose to use the global promise library


// Start server
app.listen(port, () => {
    const startup_msg = `${new Date().toUTCString()} - Dashboard' server-side API listening on port ${port}`;
    console.log(startup_msg);
});
