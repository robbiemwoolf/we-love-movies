const router = require('express').Router({ mergeParams: true })
const controller = require('./theaters.controller')
const methodNotAllowed = require('../../utils/errors/methodNotAllowed')

router
    .route("/theaters")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router