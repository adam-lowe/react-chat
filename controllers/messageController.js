const Messages = require("../models/schema");



  Messages.all({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });


router.post("/api/messageHist", function({ body }, res) {
  Messages.add(body)
    .then(dbMessages => {
      res.json(dbMessages);
    })
    .catch(err => {
      res.json(err);
    });
});

// Export routes for server.js to use.
module.exports = router;
