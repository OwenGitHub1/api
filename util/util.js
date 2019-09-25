/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */



module.exports = {
  generateID(recordType){
    if (!recordType) {
      recordType = 'some';
    }
    return `${recordType}${Date.now().toString(36)}`;
  }
};
