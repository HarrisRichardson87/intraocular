const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const leaguesRoute = require('./route/leaguesRoute');
require('dotenv').config();
const url = process.env.DB_CONNECTION
app.use(express.json())
app.use(cors())

//For production//
app.use(express.static("build"));


app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname,  "build", "index.html"));
 });

//Connect to Mongo DB//
mongoose
  .connect(`${url}`, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Get League Data//
app.use("/leagues", leaguesRoute);


app.listen(process.env.PORT || 5000)