/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */

const Schema = require('validate');

const CountDayRecord = new Schema({
  id: {
    type: Number,
    required: false
  },
  eventName: {
    type: String,
    required: true,
    length: { min: 1, max: 50 }
  },
  eventTime: {
    type: Number,
    required: true
  },
  uid: {
    type: Number,
    required: true
  }
});

module.exports = {CountDayRecord};
