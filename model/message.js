var message = {
  all: function(cb) {
    orm.all("messages", function(res) {
      cb(res);
    });
  },
  add: function(message) {
    fetch("/api/messageHist", {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message
        })
    })
  }
};

// Export the database functions for the controller (messagesController.js).
module.exports = message;
