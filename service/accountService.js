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

module.exports = {
  async register(params){
    const { platform, email } = params;
    const checkExist = await this.checkAccountExist(email, platform);
    if (checkExist) {
      return Errors.nameExists('Account exist');
    }

  },

  async checkAccountExist(email, platform){
    if (!email || !platform || !PlatformEnum.platformList.includes(platform)) {
       throw new Error(Errors.paramError(`params: ${email}-${platform}`));
    }
    const result = await Account.findAll({where: {email,platform}});
    return result.length > 0;
  }
};
