var express = require("express");
const Messages = require("../models/schema");

var router = express.Router();

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
