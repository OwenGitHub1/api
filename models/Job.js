/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Sequelize = require('sequelize');
const sequelize = require('../conf/dbConf.js');
const Job = sequelize.define('job', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false
  },
  content: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  requirement: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: true
  },
  contact: {
    type: Sequelize.STRING,
    defaultValue: 0,
    allowNull: false
  },
  creator: {
    type: Sequelize.STRING,
    defaultValue: 0,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    defaultValue: 0,
    allowNull: true,
  },
  source: {
    type: Sequelize.STRING,
    defaultValue: 0,
    allowNull: true,
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
  tableName: 'job',
  timestamps: false,
});
module.exports = Job;
