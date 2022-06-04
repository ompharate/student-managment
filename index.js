const express = require("express")
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const app = express()
const router = require("./router/router")

const connectDB = async () =>{
    try{
        const con = await mongoose.connect("mongodb+srv://om:pharate11@cluster0.nnceu.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected")
    }catch(err){
        console.log(err)
    }
}
connectDB();

app.use(bodyparser.urlencoded({ extended : true}))
app.set("view engine", "ejs")
app.use('/',router)
// app.set("views", path.resolve(__dirname, "views/ejs"))
app.listen(3000,()=>{

    console.log(`app is runnig on http://localhost:3000`)

})
