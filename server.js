const express = require('express')
const app = express()
//const con = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./router/router')

const mongoose = require('mongoose')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', router)

//database
const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  try {
    mongoose.connect(
      'mongodb+srv://sujatha123:sujatha6376@cluster0.g7peyaj.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('database connected')
  } catch (error) {
    console.log(error.message)
  }
})
database()
async function run () {
  //await client.connect();

  app.listen(process.env.port, () => {
    console.log(`listening on port ${process.env.port}`)
  })
}
run()
