const Product = require('../model/products')
//create product
const create = async (req, res) => {
  try {
    const resp = await Product.create({
      category_id: req.body.category_id,
      product: req.body.product
    })

    const result = await resp.save()
    return res.status(200).json({
      message: 'record is created in db',
      res: result
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'unable to create the record',
      error: error
    })
  }
}
//getall products
const categoriesByProduct = async (req, res) => {
  let page =req.body.limit;
  let offset =req.body.skip;
  try {
    const resp1 = await Product.find().populate('category_id').limit(page)
    .skip(offset)
    .exec();
    res.json(resp1)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'unable to find the record',
      error: error
    })
  }
}
const categoriesByProduct1 = async (req, res) => {
  
  try {
    const resp1 = await Product.findOne({where:{
      category_id:req.body.category_id
    }})
    res.json(resp1)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'unable to find the record',
      error: error
    })
  }
}

module.exports = { create, categoriesByProduct,categoriesByProduct1}
