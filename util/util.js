/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
'use strict';
const { SHA3 } = require('sha3');
const hash = new SHA3(256);
const Account = require('../models/Account.js');

module.exports = {
  // 生成常规记录ID
  generateID(recordType = ''){
    return `${recordType}${Date.now().toString(36)}-${Math.floor(Math.random() * 1000000).toString(16)}`;
  },
  // 生成用户ID
  async generateUserID() {
    const data = await Account.findAndCountAll();
    return data.count + 1;
  },
  generateRandomString(){
    const strList = ['0','1','2','3','4','5','6','7','8','9'];
    let result = '%s%s%s%s%s%s';
    return result.replace(/%s/g, (x)=>{
      return strList[Math.floor(Math.random() * 10)]
    })
  },
  encrypt(content){
    if (!content) {
      return '';
    }
    if (typeof content !== 'string') {
      throw new Error(`param type error: ${content}`);
    }
    hash.update(content);
    return hash.digest('hex');
  }
};
