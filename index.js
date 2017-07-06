const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const notes = []
let notesId = 0

app.get('/notes', function (req, res) {
  res.json(notes)
})

app.use(jsonParser)

app.post('/notes', function (req, res) {
  notes.push(req.body)
  req.body.id = notesId++
  res.sendStatus(201)
})

app.put('/notes/:id', function(req, res) {
  notes.forEach(function(item) {
    if (item.id === Number(req.params.id)) {
      for (const prop in req.body) {
        item[prop] = req.body[prop]
      }
    }
  })
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
