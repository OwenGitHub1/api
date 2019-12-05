/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
module.exports = {
   name: {type: 'string', required: false, allowEmpty: false},
   email: {type: 'email', required:true, allowEmpty: false},
   platform: {type: 'enum', values: [1, 2]},
  password: {type: 'password', required: true, allowEmpty: false, min: 6}
};
