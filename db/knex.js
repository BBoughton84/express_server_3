const envirnonment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[envirnonment]
const knex = require('knex')(config)

module.exports = knex
