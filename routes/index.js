/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const home = require('./home');
const countDay = require('./countDay');

module.exports = app => {
  app.use('/', home);
  app.use('/api/count-day', countDay);
};
