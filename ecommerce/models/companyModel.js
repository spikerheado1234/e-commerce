var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var company = new Schema(
  {
    company_id : { type: String, required: true, min: 1},
    company_password : { type: String, required: true, min: 1}
  }
);


module.exports = mongoose.model('company', company);
