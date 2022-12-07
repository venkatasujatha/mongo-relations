const { response } = require('express')
const Main = require('../model/main')

const create = async (req, res) => {
  try {
    const { id, name } = req.body
    const resp = await Main.create({
      id,
      name
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

const mainFind = async (req, res) => {
  try {
    const resp1 = await Main.find().populate('id')

    res.json(resp1)
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'unable to find the record',
      error: error
    })
  }
}

module.exports = { create, mainFind }
