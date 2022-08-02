const asyncErrorBoundary = require('../../utils/errors/asyncErrorBoundary')
const theatersService = require('./theaters.service')

async function list(req, res) {
    const theaters = await theatersService.list()
    const theatersAndMovies = []
    for (let i = 0; i < theaters.length; i++) {
        const theater = theaters[i]
        const { theater_id } = theater
        const movie = await theatersService.getMovies(theater_id)
        const movieToPush = { ...theater, movies: movie }
        theatersAndMovies.push(movieToPush)
    }
    res.json({ data: theatersAndMovies })
}

module.exports = {
    list: asyncErrorBoundary(list),
}