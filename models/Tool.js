/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const {Sequelize, sequelize} = require('../db/sequelize');
const Tool = sequelize.define('tool', {
  // tool id
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true,
    allowNull: false
  },
  // tool name
  name: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  // 来源站点或APP
  site: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  // 来源站点或APP
  link: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  // description
  desc: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  icon: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  tag: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: true
  },
  category: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: true
  },
  like: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  saved: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  used_time: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
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
  tableName: 'tool',
  timestamps: false,
});
module.exports = Tool;
