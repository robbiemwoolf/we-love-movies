const knex = require('../../db/connection')

function list() {
    return knex('movies').select('*')
}

function listIsShowing() {
    return knex('movies as m')
        .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id' )
        .select('m.*')
        .where({ is_showing: true })
        .groupBy('m.movie_id')
}

function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .first()
}

function listTheaters(movieId) {
    return knex('movies as m')
        .join('movies_theaters as mt', 'mt.movie_id', 'm.movie_id')
        .join('theaters as t', 't.theater_id', 'mt.theater_id')
        .select('t.*', 'm.movie_id')
        .where({ 'm.movie_id': movieId })      
}

function getCritics(criticId) {
    return knex('critics')
        .select('*')
        .where({ 'critic_id': criticId })
}

function listReviews(movieId) {
    return knex('reviews as r')
        .join('movies as m', 'm.movie_id', 'r.movie_id')
        .select('r.*')
        .where({ 'm.movie_id': movieId })
}

module.exports = {
    list,
    listIsShowing,
    read,
    listTheaters,
    getCritics,
    listReviews,
}