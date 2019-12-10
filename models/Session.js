/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const { Sequelize, sequelize } = require('../db/sequelize');
const Session = sequelize.define('session', {
  // session id
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true,
    allowNull: false
  },
  // session
  session: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  // user id
  uid: {
    type: Sequelize.STRING(255),
    defaultValue: '',
    allowNull: false
  },
  created: {
    type: Sequelize.DATE(),
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  expired: {
    type: Sequelize.DATE(),
    defaultValue: Sequelize.NOW,
    allowNull: false
  }
}, {
  tableName: 'session',
  timestamps: false,
});
module.exports = Session;
