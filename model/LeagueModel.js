const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
    name: {
        type: String
    },
    seasons:[Object
    ]

})

module.exports  = mongoose.model("league", LeagueSchema);