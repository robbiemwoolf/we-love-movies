const knex = require('../../db/connection')

function list() {
    // TODO: return all the theaters and, the movies playing at each theatre
    return knex('theaters').select('*')
    
}

module.exports = {
    list,
}