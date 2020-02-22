import express from 'express'

var router = express.Router();

const app = express()

var message = {

  
  all: function(cb) {
    router.get("/api/messageHist", function(req, res) {});
  console.log(req.body);
  },
  add: function(message) {
    app.post("/submit", (req, res) => {
      console.log(req.body);
    });
  }
};

// Export the database functions for the controller (messagesController.js).
module.exports = message;
