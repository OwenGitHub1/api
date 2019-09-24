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
const Interface = require('../interface/countDay');
const Errors = require('../util/error');
const CountDay = require('../models/CountDay.js');

// table has been created not allowed to created

//router.get('/table', async (req, res) => {
//  const {result} = await db.query('CREATE TABLE "public"."count_day" (\n' +
//    '  "id" int8 NOT NULL,\n' +
//    '  "event_name" varchar(255) NOT NULL,\n' +
//    '  "event_time" varchar(255) NOT NULL,\n' +
//    '  "uid" int8 NOT NULL,\n' +
//    '  "created" date NOT NULL,\n' +
//    '  "updated" date NOT NULL\n' +
//    ')');
//  res.send(result);
//});

router.get('/records', async (req, res) => {
  const result = await CountDay.findAll();
  res.send(result);
});

router.post('/add', async (req, res) => {
   const params = req.body;
   const errors = Interface.CountDayRecord.validate(params);
   if (errors.length) {
     res.send(Errors.paramError(errors[0].message));
   }else {
     let date = new Date();
     const result = await CountDay.create({
       id:Date.now(),
       event_name: params.eventName,
       event_time: params.eventTime,
       uid: params.uid,
       created: date,
       updated: date
     });
     res.send(Errors.serverOK());
   }
});

module.exports = router;
