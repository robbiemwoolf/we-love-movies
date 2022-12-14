const e = require('express')
const asyncErrorBoundary = require('../../utils/errors/asyncErrorBoundary')
const moviesService = require('./movies.service')

// get movies, also get movies that are currently showing
async function list(req, res) {
    if (!req.query.is_showing) {
    const data = await moviesService.list()
    res.json({ data })
    }
    else {
        const data = await moviesService.listIsShowing()
        res.json({ data })  
    }
}

// check if movie exists
function movieExists(req, res, next) {
    moviesService
        .read(req.params.movieId)
        .then((movie) => {
            if (movie) {
                res.locals.movie = movie
                return next()
            }
            next({ status: 404, message: `Movie cannot be found.`})
        })
        .catch(next)
}

// get movie
async function read(req, res) {
    res.json({ data: res.locals.movie })
}

// get theaters where movie is showing
async function listTheaters(req, res) {
    const movieId = res.locals.movie.movie_id
    const response = await moviesService.listTheaters(movieId)
    res.json({ data: response })
}

// get reviews for matching movie
async function listReviews(req, res) {
    const movieId = res.locals.movie.movie_id
    const reviews = await moviesService.listReviews(movieId)
    const allReviews = []
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i]
        const critic = await moviesService.getCritic(review.critic_id)
        review.critic = critic[0]
        allReviews.push(review)
    }
    res.json({ data: allReviews }) 
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [movieExists, asyncErrorBoundary(read)],
    listTheaters: [movieExists, asyncErrorBoundary(listTheaters)],
    listReviews: [movieExists, asyncErrorBoundary(listReviews)]
}