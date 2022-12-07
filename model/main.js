const mongoose = require('mongoose')

const mongooseSchemaMain = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

// mongooseSchema.virtual('categoriesTypes' , {

//         ref:"Category",
//         localField: 'id',
//         foreignField: 'mains',
//     })
//     mongooseSchema.set('toObject',{virtuals:true});
//     mongooseSchema.set('toJSON',{virtuals:true})
module.exports = mongoose.model('Main', mongooseSchemaMain)
