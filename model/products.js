const mongoose = require('mongoose')

const mongooseSchemaProduct = new mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    product: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Product', mongooseSchemaProduct)
