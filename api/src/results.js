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
    let id = req.params.id
    Result.query()
        .where('id', id)
        .then(result => {
            res.json(result)
        })
})

// get create new result
router.post('/results/create', (req, res) => {
    const result = req.body;

    Result.query()
        .insert({ ...result })
        .then(result => {
            res.json(result)
        })
})

// delete result
router.post('/results/:id', (req, res) => {
    let id = req.params.id

    Result.query()
        .deleteById(null)
        .then(result => {
            res.json(result)
        })
})

module.exports = {
    router: router,
}
