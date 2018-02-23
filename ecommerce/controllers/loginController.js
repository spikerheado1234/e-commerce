var company = require('../models/companyModel.js');
const {body, validationResult} = require('express-validator/check');
const sanitizeBody = require('express-validator/filter');

exports.process_login = [
  body('login_info').isLength({min: 1}).trim(),
  sanitizeBody('login_info').trim().escape(),
  (req, res, next) => {
    var errors = validationResult(req);
    if(!errors.isEmpty()) {
      res.render('error', {error: errors.array()});
    } else {
      company.findById({company_id: req.body.company_id}).then(function(err, result) {
        var check = result.company_password  === req.body.company_password;
        if(check) {
          res.render('personalPage');
        } else {
          res.render('error');
        }
      });
    }
  }
];
