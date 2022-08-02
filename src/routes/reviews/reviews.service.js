const knex = require('../../db/connection')

// get reviews
function list() {
    return knex('reviews')
}

// get matching review
function read(reviewId) {
    return knex('reviews')
        .where({ review_id: reviewId })
}

// update matching review
function update(updatedReview, reviewId) {
    return knex('reviews')
        .select('*')
        .where({ review_id: reviewId })
        .update({ ...updatedReview, updated_at: knex.fn.now() })
        .then((updatedRecords) => updatedRecords[0] )
}

// get matching critic
function getCritic(criticId) {
    return knex('critics')
        .select('*')
        .where({ critic_id: criticId })
}

// delete matching review
function destroy(reviewId) {
    return knex('reviews').where({ review_id: reviewId }).del()
}

module.exports = {
    list,
    read,
    update,
    getCritic,
    delete: destroy,
}