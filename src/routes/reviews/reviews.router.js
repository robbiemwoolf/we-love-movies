const router = require('express').Router({ mergeParams: true })
const controller = require('./reviews.controller')
const methodNotAllowed = require('../../utils/errors/methodNotAllowed')

router
    .route("/")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed)

module.exports = router