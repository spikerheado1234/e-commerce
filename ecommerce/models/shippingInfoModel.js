var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shippingInfo = new Schema(
  {
    ship_id : {type: Number, required: true},
    leave_date: {type: Date, required: true},
    arrival_date: {type: Date, required: true},
    destination: {type: String, requied: true},
    source: {type: String, required: true}
  }
);

module.exports = mongoose.model('shippingInfo', shippingInfo);
