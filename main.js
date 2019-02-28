const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5559

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
})

