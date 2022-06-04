const express = require("express")
const router = express.Router()
var Studdb = require("../models/model")
router.get('/',(req,res)=>{

    res.render("index")

})

router.post('/addstud',(req,res)=>{
    const student = new Studdb({
        name:req.body.name,
        email:req.body.email,
        class:req.body.class,
        Address:req.body.Address
    })

    student.save(student)
        .then(data=>{
            // res.redirect("records")
            res.redirect("/records")
        }).catch(err=>{
            res.send(err)
        })
})


router.get('/records',(req,res)=>{

    Studdb.find()
        .then(students=>{
            
            res.render("records",{students : students})
        }).catch(err=>{
            req.send(err)
        })

   
})

module.exports = router