const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path")

app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
