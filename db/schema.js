const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  id: {
    type: Number,
    trim: true,
    required: true
  },  
  Text: {
    type: String,
    trim: true,
    required: true
  },
  Date: {
    type: Date,
    trim: true,
    required: true
  }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;