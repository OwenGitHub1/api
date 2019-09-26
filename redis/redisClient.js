/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const redis = require("redis");
const client = redis.createClient({
  port: 6379, // Redis port
  host: '172.16.1.76', // Redis host
  password: 'rrd_loan',
  db: 0,
});

module.exports = client;
