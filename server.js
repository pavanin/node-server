const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(helmet());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/check', (req, res) => {
    res.send('working fine');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Success');
});

app.listen(8000);