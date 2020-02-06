const express = require('express')
const router = express.Router()

const Result = require('../models')

// get all results
router.get('/results', (req, res) => {
    Result.query().then(results => {
        res.json(results)
    })
})

// get result by id
router.get('/results/:id', (req, res) => {
    // get id from params in request
    let id = req.params.id

    // run query and get result
    Result.query()
        .where('id', id)
        .then(result => {
            res.json(result)
        })
})

// get create new result
router.post('/results/create', (req, res) => {
    // get input from body in request
    const input = req.body

    Result.query()
        .insert({ ...input })
        .then(result => {
            res.json(result)
        })
})

// delete result
router.post('/results/:id', (req, res) => {
    // get id from params in request
    let id = req.params.id

    // run query and delete specific result
    Result.query()
        .deleteById(id)
        .then(result => {
            res.json(result)
        })
})

module.exports = {
    router: router,
}
