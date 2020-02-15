import mongojs from 'mongojs';
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from "morgan"

const app = express()

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const databaseUrl = "messageHistory";
const collections = ["messages"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/all", (req, res) => {
  db.messages.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

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