const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String
    },

    class:{
        type:String
    },

    Address:{
        type:String
    }



})

const Studdb = mongoose.model('Studdb',schema)
module.exports = Studdb