var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemInformation = new Schema(
  {
    product_id : {type: String, required: true, min: 1},
    size : {type: Number, required: true, min: 1},
  }
);

itemInformation.virtual('url').get(function() {
  return '/' + this.product_id;
  }
);

module.exports = mongoose.model('itemInformation', itemInformation);
