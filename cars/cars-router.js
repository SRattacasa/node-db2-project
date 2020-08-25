
const db = require("../data/config")
const express = require("express")

const router = express.Router()



router.get('/cars', async (req, res) => { 
    try {
    const accountList = await db.select("*").from("cars")
    res.status(200).json(accountList)
    } catch (err) {
        next(err)
    }
})



router.post("/cars",   async (req, res) => { 
    try {
        const id = await db.insert({
            make: req.body.make,
            model: req.body.model,
            VIN: req.body.VIN,
            mileage: req.body.mileage,   
            transmission: req.body.trans,   
            mileage: req.body.mileage,   
            title: req.body.title,
        })
        .into("cars")
        
        const newAcct = await db("cars").where("id", id)
        
        res.status(201).json(newAcct)
        } catch (err) {
            next(err) 
        }
})


module.exports = router