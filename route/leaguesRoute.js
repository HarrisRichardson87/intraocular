const express = require('express');
const router = express.Router();
const LeagueModel = require('../model/LeagueModel');

//return all the leagues
router.get('/all', (req, res) => {
   console.log("IN get leagues");
   
   LeagueModel.findOne().then((seasons)=> 
   {  console.log(seasons)
      res.send(seasons)
   }


   )

});
//return the specific league seasons
router.get('/by/:league/allseasons', (req, res) => {
   console.log("IN get leagues");
   
   LeagueModel.findOne({name:req.params.league}).then((seasons)=> 
   {  console.log(seasons)
      res.send(seasons)
   }


   )

});
//return the specific league with specific season

router.get('/by/:league/:season', (req, res) => {
   console.log("IN get leagues", req.params.league,req.params.season );
   let year = Number(req.params.season)
   LeagueModel.find( { name:  req.params.league},
   { seasons: { $elemMatch: { year } } } ).then((seasons)=> 
   {  console.log(seasons)
      res.send(seasons)
   }


   )

});


router.get('/test', (req, res) => {
   console.log("IN get leagues");
   
   res.send({msg:"in"})
   

});

module.exports = router