import mongoose from 'mongoose';
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from "morgan"

const app = express()

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userdb";

mongoose.connect(MONGODB_URI);

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})