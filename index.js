const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const notes = []

app.get('/notes', function (req, res) {
  res.json(notes)
})

app.post('/notes', function (req, res) {
  notes.push(req.body)
  res.sendStatus(201)
})
