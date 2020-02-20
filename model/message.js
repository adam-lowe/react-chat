import express from 'express'

const app = express()

var message = {
  all: function(cb) {
    app.get("/messages", function(res) {
      cb(res);
    });
  },
  add: function(message) {
    app.post("/submit", (req, res) => {
      console.log(req.body);
    });
  }
};

// Export the database functions for the controller (messagesController.js).
module.exports = message;
