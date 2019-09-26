/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Schema = require('validate');

const AccountRecord = new Schema({
  uid: {
    type: String,
    required: false,
    length: { min: 1, max: 64 }
  },
  name: {
    type: String,
    required: false,
    length: { min: 1, max: 255 }
  },
  email: {
    type: String,
    required: false,
    length: { min: 1, max: 255 }
  },
  wechat: {
    type: String,
    required: false,
    length: { min: 1, max: 255 }
  },
  address: {
    type: String,
    required: false,
    length: { min: 1, max: 255 }
  },
  pwd: {
    type: String,
    required: false,
    length: { min: 1, max: 255 }
  },
  tel: {
    type: String,
    required: false,
    length: { min: 1, max: 15 }
  },
  gender: {
    type: Number,
    required: false
  },
});

module.exports = AccountRecord;
