const startupDEbugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const morgan = require("morgan");
const express = require('express');
const process = require('process');
const app = express();

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDEbugger('morgan enabled');
}

dbDebugger('connected');

const port = process.env.PORT  || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));