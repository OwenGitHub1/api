/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const genRes = function(code,msg,data = ''){
  return {code,msg,data};
};

module.exports = {
  serverOK(data) {
    return genRes(0, 'Success', data);
  },

  paramError(desc) {
    return genRes(1001, 'invalid param', desc);
  },

  nameExists(desc){
    return genRes(1002, 'name has been exist', desc);
  },

  accountExist(desc){
    return genRes(1003, 'account has been register', desc);
  },

  loginError(desc) {
    return genRes(1004, 'email or password error', desc);
  },

  noPermisson(desc) {
    return genRes(1005, 'no permission', desc);
  }

};
