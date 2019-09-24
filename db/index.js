/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const { Pool } = require('pg');
const config = require('../conf/config');
const pool = new Pool({
  connectionString: config.postgresUrlLocal
  // connectionString: config.postgresUrlProd
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
