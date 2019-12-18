/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
'use strict';
const Account = require('../models/Account.js');
const Session = require('../models/Session.js');
const Errors = require('../util/error.js');
const PlatformEnum = require('../enums/PlatformEnum');
const AccountInfo = require('../class/AccountInfo');
const SessionInfo = require('../class/SeesionInfo.js');
const util = require('../util/util.js');
const Sequelize = require('sequelize');

module.exports = {
  async register(params){
    const { platform, email, name, password } = params;
    const checkExist = await this.checkAccountExist(email, platform);
    if (checkExist) {
      return Errors.accountExist();
    }
    const id = await util.generateUserID();
    const account = new AccountInfo(id.toString(), name, email, password, platform);
    const result = await Account.create(account);
    return Errors.serverOK(await this.refreshSession(result.dataValues.id));
  },

  async login(params) {
    const { platform, email, password } = params;
    const hashPassword = util.encrypt(password);
    // 查询用户
    const result = await Account.findAll({where: {email,platform, password:hashPassword}});
    if (result.length === 1) {
      // 生成session
      return Errors.serverOK(await this.refreshSession(result[0].id));
    } else {
      return await this.register(params);
    }
  },

  async checkAccountExist(email, platform){
    if (!email || !platform || !PlatformEnum.platformList.includes(platform)) {
       throw new Error(JSON.stringify(Errors.paramError(`params: ${email}-${platform}`)));
    }
    const result = await Account.findAll({where: {email,platform}});
    return result.length > 0;
  },

  async refreshSession(uid){
    const sessionCheckResult = await Session.findAll({where: {uid}});
    const sessionInfo = new SessionInfo(uid);
    if (sessionCheckResult.length === 0) {
      await Session.create(sessionInfo);
    } else {
      await Session.update({session:sessionInfo.session, created: sessionInfo.created, expires: sessionInfo.expired},{where: {uid}});
    }
    return {session: sessionInfo.session};
  },

  async getList(params){
    const { platform, name, page, pageSize} = params;
    const option = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      where: {}
    };
    const countOption = {
      where:{}
    };

    if (name) {
      option.where.name = {[Sequelize.Op.like]:`%${name}%`};
      countOption.where.name = {[Sequelize.Op.like]:`%${name}%`};
    }
    const result = await Account.findAll(option);
    const totalRes = await Account.findAndCountAll(countOption);
    return {
      total: totalRes.count,
      page,
      pageSize,
      data: result
    }
  }
};
