const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const MongoClient = require('mongodb').MongoClient;
const leaguesRoute = require('./route/leaguesRoute');
const port = 5000 || process.env.PORT
require('dotenv').config();
const url = process.env.DB_CONNECTION
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000;
//Connect to Mongo DB//
mongoose
  .connect(`${url}`, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Get League Data//
app.use("/leagues", leaguesRoute);


app.listen(port, () => console.log(`App serving on PORT ${port}`));