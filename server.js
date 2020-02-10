const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require("morgan");

const app = express()

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post("/submit", (req, res) => {
  console.log(req.body);
});

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})