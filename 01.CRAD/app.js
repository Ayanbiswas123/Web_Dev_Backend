require('dotenv').config();
const express = require('express')

//cross origin request between frontend and backend
const cors = require('cors');

const connectoDB = require('./config/db.js')
const userRoute = require('./router/userRoutr.js')

const app = express();
//Express middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//init connectoDB
connectoDB();



// Routes
app.use('/', userRoute);

module.exports = app;