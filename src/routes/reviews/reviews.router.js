const router = require('express').Router({ mergeParams: true })
const controller = require('./reviews.controller')
const methodNotAllowed = require('../../utils/errors/methodNotAllowed')

router
    .route("/reviews/:reviewId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed)

router.router('/').all(methodNotAllowed)

module.exports = router