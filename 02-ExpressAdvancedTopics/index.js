
const config = require('config')
const helmet = require('helmet');
const morgan = require('morgan')
const express = require('express');
const logger = require('./logger')
const authentication = require('./authentication')
const courses = require('./routes/courses')
const home = require('./routes/home')

const app = express()


if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    console.log('Morgan enabled...');
}

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//------  NODE_ENV  //--- show  project environment status : development testing or production
console.log(`app: ${app.get('env')}`);
// shows curent enviroment , if undefined then set to development 
//---- in terminal we set enviroment with comand /on windows:  set NODE_ENV=production  , /on mac export NODE_ENV=production
//    $env:NODE_ENV="development"; node index.js     comand to change NODE_ENV on windows using power shell



app.use(express.json())
app.use(express.urlencoded({ extended: true })) // key=value&key=value  // midlewar for sending params in key=value pairs 
app.use(express.static('public'))  // midleware for reading static files from specifide folder // by tiping http://localhost:3000/readme.txt in browser
app.use(helmet())



app.use('/', home)
app.use('/api/courses', courses)

console.log(`Aplication Name ${config.get("name")}`);
console.log(`Aplication Mail server ${config.get("mail.host")}`);
console.log(`Aplication Mail server ${config.get("mail.password")}`); //-- read from evviroment variable





app.use(logger)
app.use(authentication)




//-------------listenr for port 3000 - process.env.PORT  is not set 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening..." + port));
