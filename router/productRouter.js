const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const mongooseSchema = require('../model/products')

//productSave
router.post('/productSave', async (req, res) => {
    
    const result = new mongooseSchema({
        id: req.body.id,
        product: req.body.product
    })
    try {
        const resp = await result.save()
        res.status(200).json({
            message:"record is saved in db",
            res:resp
        })
    } catch (err) {
        res.status(400).json({
            message:"unable to save into db"
        })
    }
})
//getAllRecords
router.get('/getAllRecords', async (req, res) => {
    try {
        const getAllRecords = await mongooseSchema.find()
        res.status(200).json({
            message:"fetch all the records from db",
            res:getAllRecords
        })
    } catch (err) {
        res.status(400).json({
            message:"unable to save into db"
        })
    }
})


module.exports=router
