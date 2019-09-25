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
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  wechat: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: true
  },
  tel: {
    type: Sequelize.STRING(15),
    defaultValue: '',
    allowNull: true
  },
  gender: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  address: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: true
  },
  pwd: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: true
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
