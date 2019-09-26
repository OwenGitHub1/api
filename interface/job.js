/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Schema = require('validate');

const JobRecord = new Schema({
  id: {
    type: String,
    length: { min: 1, max: 64 },
    required: false
  },
  title: {
    type: String,
    required: true,
    length: { min: 1, max: 100 }
  },
  content: {
    type: String,
    required: true,
    length: { min: 1, max: 800 }
  },
  requirement: {
    type: String,
    required: false,
    length: { min: 1, max: 800 }
  },
  contact: {
    type: String,
    required: true,
    length: { min: 1, max: 200 }
  },
  creator: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: false,
    length: { min: 1, max: 100 }
  },
  source: {
    type: String,
    required: false,
    length: { min: 1, max: 200 }
  }
});

module.exports = JobRecord;
