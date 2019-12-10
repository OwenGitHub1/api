/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const util = require('../util/util.js');
class SessionInfo {
  constructor(uid) {
    const now = new Date();
    this.id = util.generateID('s');
    this.uid = uid;
    this.session = util.generateSession(uid);
    this.created = now;
    this.expired = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  }
}

module.exports = SessionInfo;
