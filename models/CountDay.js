/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Sequelize = require('sequelize');
const sequelize = require('../conf/dbConf.js');
const CountDay = sequelize.define('count_day', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  event_name: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  event_time: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  uid: {
    type: Sequelize.STRING,
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
  tableName: 'count_day',
  timestamps: false,
});
module.exports = CountDay;
