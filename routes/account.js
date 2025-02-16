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
const AccountService = require('../service/accountService');
const bodyValidator = require('../util/validtor');
const addAccountRule = require('../class/requestBodyRule/addAccountRequest.js');
const loginRequestRule = require('../class/requestBodyRule/loginRequest.js');
const queryAccountRule = require('../class/requestBodyRule/queryAccountRequest.js');

const router = new Router();

router.post('/register', async (req, res) => {
  const params = req.body;
  const errors = bodyValidator(addAccountRule, params);
  if (errors) {
    res.send(Errors.paramError(errors));
  } else {
    res.send(await AccountService.register(params));
  }
});

router.post('/login', async (req, res) => {
  const params = req.body;
  const errors = bodyValidator(loginRequestRule, params);
  if (errors) {
    res.send(Errors.paramError(errors));
  } else {
    res.send(await AccountService.login(params));
  }
});

router.post('/logout', async (req, res) => {

});

router.post('/list', async (req, res) => {
  const params = req.body;
  const errors = bodyValidator(queryAccountRule, params);
  if (errors) {
    res.send(Errors.paramError(errors));
  } else {
    res.send(await AccountService.getList(params));
  }
});

router.post('/send-verify-code', async (req, res) => {
  const verifyCode = Util.generateRandomString();
  await Mailer.sendVerificationEmail('weiyong@youxin.com',verifyCode);
  res.send(Errors.serverOK(verifyCode));
});

module.exports = router;
