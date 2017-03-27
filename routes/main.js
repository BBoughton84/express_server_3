const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('typeOfCar')
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  console.log(req.body);
  var test1 = req.body.manuf1
  var test2 = req.body.model1
  var test3 = req.body.eng_hp
  console.log(test1, test2, test3);
  knex('typeOfCar').insert({eng_hp:test3,  manuf:test1, model:test2})
    .then(result => {
      res.send(200)
    })
})

router.delete('/:id', (req, res) => {
  var id = req.params.id
  knex('typeOfCar').where('id', id).del()
    .then(result => {
      res.send(200)
    })
})



module.exports = router
