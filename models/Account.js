/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const {Sequelize, sequelize} = require('../db/sequelize');
const Account = sequelize.define('account', {
  // user id
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true,
    allowNull: false
  },
  // user name
  name: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  // 注册站点或APP
  platform: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  // email address
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
  password: {
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
