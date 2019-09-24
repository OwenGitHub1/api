/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Sequelize = require('sequelize');
const sequelize = require('../conf/dbConf.js');
const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  token: {
    type: Sequelize.STRING(11),
    defaultValue: '',
    allowNull: false
  },
  created: {
    type: Sequelize.DATE(),
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  updated: {
    type: Sequelize.DATE(),
    defaultValue: Sequelize.NOW,
    allowNull: false
  }
}, {
  tableName: 'account',
  timestamps: false,
});
module.exports = Account;
