/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const basicAuth = require('basic-auth');
const Error = require('../util/error.js');
const config = require('../conf/config.js')[process.env.NODE_ENV || 'development'];


module.exports = function(req, res, next){
  const url = req.url;
  const noPermissionError = Error.noPermisson();
  if (config.authUrl.includes(url)) {
    const credentials = basicAuth(req);
    if (!credentials) {
      return res.send(noPermissionError);
    }
    if (credentials.name && credentials.pass && credentials.name === 'owenweies6' && credentials.pass === '8043osdhfkhsfiu_jsHG0') {
      return next();
    }
  }else {
    next();
  }
};
