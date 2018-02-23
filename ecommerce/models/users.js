var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema(
  {
    user_id : { type: String, required: true},
    password : {type: String, required: true, min: 1}
  }
);

// Virtual attributes displaying the users username and password for ease later.
user.virtual('username').get(function() {
  return '/' + this.user_id;
});

user.virtual('password').get(function() {
  return '/' this.password;
});

module.exports = mongoose.model("users", users);
