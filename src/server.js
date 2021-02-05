const express = require('express');
const dvdRoute = require('./routes/dvd');
const categoryRoute = require('./routes/category');

const app = express();

const db = require('./model');
db.sequelize.sync({}).then(() => {
    console.log("Drop and re-sync db.");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("Incoming request from", req.ip);
    next();
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/dvds', dvdRoute);

app.use('/categories', categoryRoute);

app.use((req, res, next) => {
    console.log("Request end", req.ip);
    next();
});

app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
})

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log("Server listened on port", PORT);
})