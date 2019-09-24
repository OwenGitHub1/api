/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const genRes = function(code,msg,des){
  if (des === undefined) {
    des = '';
  }
  return {code,msg,des};
};

module.exports = {
  serverOK() {
    return genRes(0, 'Success');
  },

  paramError(desc) {
    return genRes(1001, 'invalid param', desc);
  }
};
