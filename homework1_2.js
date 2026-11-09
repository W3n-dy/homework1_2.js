const express = require('express')
const fs = require('fs')

const app = express()


app.get('/read-users', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(JSON.parse(data))
  })
})


app.get('/about', (req, res) => {
  res.send('<body style="background: blue;"><p>This is about page.</p></body>')
})

app.get('/my-json-api3', (req, res) => {
  res.json({ University: 'PIM' })
})

app.get('/users2', (req, res) => {
  res.json([
    { id: 1, firstname: 'Somchai', lastname: 'Jaidee' },
    { id: 2, firstname: 'Tony', lastname: 'Stark' }
  ])
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
