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

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
