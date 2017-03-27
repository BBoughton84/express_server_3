
exports.up = function(knex) {
    return knex.schema.createTable('typeOfCar', t => {
      t.increments('id')
      t.string('manuf')
      t.string('model')
      t.integer('eng_hp')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('typeOfCar')
}
