var express = require("express");
const Messages = require("../models/schema");

var router = express.Router();

// Import the model (workout.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.

router.get("/api/messageHist", function(req, res) {
  console.log(req.body);

  Messages.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/api/messageHist", function({ body }, res) {
  Messages.create(body)
    .then(dbMessages => {
      res.json(dbMessages);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/messageHist/:id", function(req, res) {
  var id = req.params.id;

});

// Export routes for server.js to use.
module.exports = router;
