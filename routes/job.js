/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Router = require('express-promise-router');
const Util = require('../util/util.js');
const Errors = require('../util/error.js');
const JobInterface = require('../interface/job.js');
const Job = require('../models/Job.js');
const Entities = require('../util/Entites.js');

const router = new Router();

/**
 * 增加Job记录
 */
router.post('/add', async (req, res) => {
  const params = req.body;
  const errors = JobInterface.validate(params);
  if (errors.length) {
    res.send(Errors.paramError(errors[0].message));
    return
  }
  // check eventName
  const nameCheck = await Job.findAll({where: {title: params.title}});
  if (nameCheck.length) {
    res.send(Errors.nameExists(params.title));
    return
  }
  let date = Date.now();
  const result = await Job.create({
    id: Util.generateID(Entities.JOB),
    title: params.title,
    content: params.content,
    requirement: params.requirement,
    contact: params.contact,
    creator: params.creator,
    price: params.price,
    source: params.source,
    created: date,
    updated: date
  });
  res.send(Errors.serverOK());
});

/**
 * 查询Job记录
 */
router.post('/list', async (req, res) =>{
  const params = req.body;
  const pageSize = params.pageSize || 10;
  const page = params.page || 1;

  const result = await Job.findAll({limit: pageSize,
    offset: pageSize * (page - 1)});
  res.send(Errors.serverOK(result));
});

/**
 * 删除Job记录
 */
router.post('/remove', async (req, res) => {
  const params = req.body;
  if (!params.id) {
    res.send(Errors.paramError(`record id error: ${params.id}`));
  }
  const result = await Job.destroy({where: {id: params.id}});
  res.send(Errors.serverOK());
});


module.exports = router;
