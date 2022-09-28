if (process.env.USER) require('dotenv').config()

const express = require('express')
const cors = require('cors')

// require routers and error handlers
const errorHandler = require('./utils/errors/errorHandler')
const notFound = require('./utils/errors/notFound')
const moviesRouter = require('./routes/movies/movies.router')
const theatersRouter = require('./routes/theaters/theaters.router')
const reviewsRouter = require('./routes/reviews/reviews.router')

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use('/movies', moviesRouter)
app.use('/theaters', theatersRouter)
app.use('/reviews/:reviewId', reviewsRouter)

// error handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app