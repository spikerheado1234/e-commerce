var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema(
  {
    user_id : { type: String, required: true},
    password : {type: String, required: true, min: 1}
  }
);

module.exports = mongoose.model("users", users);
