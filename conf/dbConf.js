/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Sequelize = require('sequelize');
const conf = require('./config')[process.env.NODE_ENV || 'dev'];
const isLogging = process.env.NODE_ENV === 'development';
const sequelize = new Sequelize(conf.postgresUrl, {
  dialect: 'postgres',
  pool: {
    max: 200,
    min: 50,
    idle: 10000,//等待时间
    acquire: 20000 //重试时间
  },
  logging: isLogging,
  timezone: '+08:00' //东八时区
});
module.exports = sequelize;
