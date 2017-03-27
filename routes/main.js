const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('typeOfCar')
    .then(result => {
      res.send(result)
    })
})

router.post('/', (req, res) => {
  // var test1 = req.body.manuf
  var test2 = req.body.model
  var test3 = req.body.eng_hp
  console.log(test1, test2, test3);
  knex('typeOfCar').insert({eng_hp:test3,  model:test2}).returning(['id', 'eng_hp', 'manuf', 'model'])
    .then(result => {
      res.send(result)
    })
})



module.exports = router
