const mongoose = require('mongoose')

const mongooseSchemaCategories = new mongoose.Schema(
  {
    main_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Main'
    },
    product_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    categoryType:[ {
      type: String,
      required: true
    }]
  },
  { timestamps: true }
)
module.exports = mongoose.model('Category', mongooseSchemaCategories)
