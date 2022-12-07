const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Main = require('../controller/mainController')
const Category = require('../controller/categoriesController')
const Product = require('../controller/productController')

router.post('/main/create', Main.create)
router.post('/category/create', Category.create)
router.get('/main/populate', Main.mainFind)
router.get('/category/populate', Category.categoriesByMain)
router.get('/product/populate', Product.categoriesByProduct)
router.post('/product/create', Product.create)
router.delete('/category/deletebyid',Category.deleteById)
router.delete('/product/deletebypid',Product.deleteByPId)

module.exports = router
