/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const home = require('./home');
const countDay = require('./countDay');
const account = require('./account.js');
const job = require('./job.js');
const tool = require('./tool.js');

module.exports = app => {
  app.use('/', home);
  app.use('/api/count-day', countDay);
  app.use('/api/account', account);
  app.use('/api/job', job);
  app.use('/api/tool', tool);
};
