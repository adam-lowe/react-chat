var message = {
  all: function(cb) {
    orm.all("messages", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  add: function(cols, vals, cb) {
    orm.create("messages", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (messagesController.js).
module.exports = message;
