/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const logger = require('../class/Logger.js');

module.exports = function(req, res, next){
  logger.info(`request url: ${req.url} params: ${JSON.stringify(req.body)} header: ${req.headers}`);
  next();
};
