/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */

const  Parameter = require('parameter');
const I18n = require('i18n');
const  validator = new Parameter({
//  translate: function() {
//    const args = Array.prototype.slice.call(arguments);
//    return I18n.t.apply(I18n, args);
//  },
  validateRoot: true,
});
module.exports = function(rule, data) {
  return validator.validate(rule, data)
};
