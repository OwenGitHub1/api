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
  },
  generateRandomString(){
    const strList = ['0','1','2','3','4','5','6','7','8','9'];
    let result = '%s%s%s%s%s%s';
    return result.replace(/%s/g, (x)=>{
      return strList[Math.floor(Math.random() * 10)]
    })
  }
};
