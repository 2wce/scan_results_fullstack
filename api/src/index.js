const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 4000

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// API Endpoints
app.use('/api', require('./results.js').router)

// Run server on given port
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})
