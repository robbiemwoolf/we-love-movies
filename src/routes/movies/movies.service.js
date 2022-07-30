const knex = require('../../db/connection')

function list() {
    return knex('movies').select('*')
    // TODO: return only those movies where the movie is currently showing in theaters
    // check movies_theaters tables
    // .where({ is_showing: true })
}

function read(movieId) {
    return knex("products").select("*").where({ movie_id: movieId }).first()
}

module.exports = {
    list,
    read,
}