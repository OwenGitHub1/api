/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const util = require('../util/util.js');
class ToolInfo {
  constructor(name, desc, site, link, icon = '', tag = '', category = '') {
    const now = new Date();
    this.id = util.generateID('t');
    this.name = name;
    this.desc = desc;
    this.site = site;
    this.link = link;
    this.icon = icon;
    this.like = 0;
    this.saved = 0;
    this.tag = tag;
    this.category = category;
    this.created = now;
    this.updated = now;
  }
}

module.exports = ToolInfo;
