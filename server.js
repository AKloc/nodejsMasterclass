import express from 'express';
import { config } from 'dotenv';

// Load all env vars
config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Get boootcamp ${req.params.id}`,
    });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamps' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Edit bootcamp ${req.params.id}`,
    });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`,
    });
});

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
