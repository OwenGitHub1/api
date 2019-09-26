/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Router = require('express-promise-router');
const Util = require('../util/util.js');
const Errors = require('../util/error.js');
const Mailer = require('../util/emailer.js');

const router = new Router();

router.post('/add', async (req, res) => {

});

router.post('/send-verify-code', async (req, res) => {
  const verifyCode = Util.generateRandomString();
  await Mailer.sendVerificationEmail('weiyong@youxin.com',verifyCode);
  res.send(Errors.serverOK(verifyCode));
});

module.exports = router;
