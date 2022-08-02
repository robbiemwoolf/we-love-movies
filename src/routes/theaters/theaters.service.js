const knex = require('../../db/connection')

// get theaters
function list() {
   return knex('theaters').select('*')
}

// get movies showing at matching theater
function getMovies(theaterId) {
    return knex('theaters as t')
        .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
        .join('movies as m', 'mt.movie_id', 'm.movie_id')
        .select('m.*', 'mt.is_showing')
        .where({ 't.theater_id': theaterId })
}

module.exports = {
    list,
    getMovies,
}