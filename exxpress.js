//const startupDEbugger = require('debug')('app:startup')
const debug = require('debug')('app:startup');
const Joi = require('joi'); 
const log = require('./middleware/put');
//const auth = require('./put');
const helmet = require("helmet");
const morgan = require("morgan");
const config = require('config');
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express');
const app = express();

app.use(express.json());
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', './views');
app.use(log);
//app.use(auth);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('./api/courses', courses);
app.use('/', home);


if(app.get('env') === 'production') {
    app.use(morgan('tiny'));
    startupDEbugger('Morgan Enabled');
}

console.log('Application Name  ' + config.get('name'));
console.log('Mail Server ' + config.get('mail.host'));



//Port
const port = process.env.PORT  || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app: ${app.get('env')}`)
