
exports.seed = function(knex, Promise) {
  return knex('typeOfCar').del()
    .then(function () {
      return knex('typeOfCar').insert([
        {
          manuf: 'GMC',
          model: 'Sierra',
          eng_hp: 353
        },
        {
          manuf: 'Subaru',
          model: 'Legacy',
          eng_hp: 170
        },
        {
          manuf: 'Porsche',
          model: '911 GT3',
          eng_hp: 500
        }
      ])
    })
}
