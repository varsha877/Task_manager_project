const express = require('express')

const { db } = require('./db')
const todoRoute = require('./routes/todos')
const port = process.env.PORT || 6543
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

db.sync()
  .then(() => {
    app.listen(port)
  })
  .catch((err) => {
    console.error(err)
  })
