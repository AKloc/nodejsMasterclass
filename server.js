const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
    // sending the below as is, express automatically sets the header contenttype to html
    //res.send('<h1>Hello from express</h1>');

    // sending the below as is, express automatically sets the header contenttype to json
    //res.send({ name: 'Andy' });

    // specify a simple json request with ".json"
    //res.json({ name: 'Andy' });

    // Just send back a status code with ".sendStatus"
    //res.sendStatus(401);

    // Combining a status code with a json response
    res.status(401).json({ error: "shit didn't work" });
});

// Try to pull the port from the .env, otherwise default to 5000
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
