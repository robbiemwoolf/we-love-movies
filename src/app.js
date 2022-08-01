if (process.env.USER) require("dotenv").config()

const express = require("express")
const cors = require('cors')

const errorHandler = require("./utils/errors/errorHandler")
const notFound = require("./utils/errors/notFound")

const moviesRouter = require('./routes/movies/movies.router')
// const theatersRouter = require('./routes/theaters/theaters.router')
// const reviewsRouter = require('./routes/reviews/reviews.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/movies', moviesRouter)
// app.get('/theaters', theatersRouter)
// app.get('/reviews/:reviewId', reviewsRouter)

app.use(notFound)

app.use(errorHandler)

module.exports = app