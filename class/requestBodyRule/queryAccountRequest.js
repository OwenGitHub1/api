/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
module.exports = {
  name: {type: 'string', required: false, allowEmpty: true},
  platform: {type: 'number', required:true, allowEmpty: true},
  pageSize: {type: 'number', required:true, allowEmpty: false},
  page: {type: 'number', required:true, allowEmpty: false},
};
