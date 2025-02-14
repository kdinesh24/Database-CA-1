const express = require('express');
const connectDB = require('./config/database')
const dotenv = require('dotenv').config()
const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

connectDB()

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`)
})