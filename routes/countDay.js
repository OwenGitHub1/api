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
const CountDayInterface = require('../interface/countDay');
const Errors = require('../util/error');
const CountDay = require('../models/CountDay.js');
const Util = require('../util/util');
const Entities = require('../util/Entites.js');

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

/**
 * 查询倒数日记录
 */
router.post('/list', async (req, res) => {
  const params = req.body;
  if (!params.uid) {
    res.send(Errors.paramError(`uid error: ${params.uid}`));
  }
  const result = await CountDay.findAll({where: {uid: params.uid}});
  res.send(result);
});

/**
 * 增加倒数日记录
 */
router.post('/add', async (req, res) => {
   const params = req.body;
   const errors = CountDayInterface.validate(params);
   if (errors.length) {
     res.send(Errors.paramError(errors[0].message));
   }
   // check eventName
   const nameCheck = await CountDay.findAll({where: {eventName: params.eventName}});
   if (nameCheck.length) {
     res.send(Errors.nameExists(params.eventName));
   }
   let date = new Date();
   const result = await CountDay.create({
     id: Util.generateID(Entities.COUNT_DAY),
     event_name: params.eventName,
     event_time: params.eventTime,
     uid: params.uid,
     created: date,
     updated: date
   });
   res.send(Errors.serverOK());
});

/**
 * 删除倒数日记录
 */
router.post('/remove', async (req, res) => {
  const params = req.body;
  if (!params.id) {
    res.send(Errors.paramError(`record id error: ${params.id}`));
  }
  const result = await CountDay.destroy({where: {id: params.id}});
  res.send(Errors.serverOK());
});

router.post('/edit', async (req, res) =>{
  const params = req.body;
  const errors = CountDayInterface.validate(params);
  if (errors.length) {
    res.send(Errors.paramError(errors[0].message));
  }
  // check eventName
  const nameCheck = await CountDay.findAll({where: {eventName: params.eventName}});
  if (nameCheck.length && nameCheck[0].eventName !== params.eventName) {
    res.send(Errors.nameExists(params.eventName));
  }
  const result = await CountDay.update({
    event_name:params.eventName,
    event_time:params.eventTime,
    uid:params.uid,
    updated: Date.now(),
  },{
    where: {
      id: params.id
    }
  });
  res.send(Errors.serverOK());
});

module.exports = router;
