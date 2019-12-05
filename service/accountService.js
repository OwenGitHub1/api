/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
'use strict';
const Account = require('../models/Account.js');
const Errors = require('../util/error.js');
const PlatformEnum = require('../enums/PlatformEnum');
const AccountInfo = require('../class/AccountInfo');
const util = require('../util/util.js');
module.exports = {
  async register(params){
    const { platform, email, name, password } = params;
    const checkExist = await this.checkAccountExist(email, platform);
    if (checkExist) {
      return Errors.accountExist();
    }
    const id = await util.generateUserID();
    const account = new AccountInfo(id.toString(), name, email, password, platform);
    await Account.create(account);
    return Errors.serverOK();
  },

  async login(params) {
    const { platform, email, password } = params;
    const hashPassword = util.encrypt(password);
    // 查询用户
    const result = await Account.findAll({where: {email,platform, password:hashPassword}});
    if (result.length === 1) {
      // 生成session

      return Errors.serverOK({session: ''});
    } else {
      return Errors.loginError();
    }
  },

  async checkAccountExist(email, platform){
    if (!email || !platform || !PlatformEnum.platformList.includes(platform)) {
       throw new Error(JSON.stringify(Errors.paramError(`params: ${email}-${platform}`)));
    }
    const result = await Account.findAll({where: {email,platform}});
    return result.length > 0;
  }
};
