const asyncErrorBoundary = require('../../utils/errors/asyncErrorBoundary')
const moviesService = require('./movies.service')

async function list(req, res) {
    const data = await moviesService.list()
    res.json({ data })
}

function read(req, res) {
    const { product: data } = res.locals;
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    read,
}