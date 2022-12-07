const Category = require('../model/categories')

const create = async (req, res) => {
  try {
    const resp = await Category.create({
      main_id: req.body.main_id,
      categoryType: req.body.categoryType
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
const categoriesByMain = async (req, res) => {
  let page =req.body.limit;
  let offset =req.body.skip;

  try {
    const resp1 = await Category.find().populate('main_id').limit(page)
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

const deleteById =async(req,res)=>{
  try {
    await Category.deleteOne(req.body).exec()
              res.status(200).json({
                  message: "record deleted successfully"
              })
  } catch (error) {

    console.log(error)
  }
    
          
}


module.exports = { create, categoriesByMain,deleteById }
