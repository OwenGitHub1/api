/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const util = require('../util/util.js');
class AccountInfo {
  constructor(id, name, email, password, platform) {
    const now = new Date();
    this.id = id;
    this.name = name || Date.now().toString();
    this.email = email;
    this.password = util.encrypt(password);
    this.platform = platform;
    this.wechat = '';
    this.tel = '';
    this.gender = 0;
    this.address = '';
    this.created = now;
    this.updated = now;
  }
}

module.exports = AccountInfo;
