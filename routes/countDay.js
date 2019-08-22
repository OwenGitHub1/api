/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

router.get('/table', async (req,res)=>{
  const {result} = await db.query('CREATE TABLE "public"."count_day" (\n' +
    '  "id" int8 NOT NULL,\n' +
    '  "event_name" varchar(255) NOT NULL,\n' +
    '  "event_time" varchar(255) NOT NULL,\n' +
    '  "uid" int8 NOT NULL,\n' +
    '  "created" date NOT NULL,\n' +
    '  "updated" date NOT NULL\n' +
    ')');
  res.send(result);
});

router.get('/records', async (req,res)=>{
  const { rows } = await db.query('SELECT * FROM count_day', []);
  res.send(rows);
});

router.post('/add', async (req,res)=>{

});

module.exports = router;
