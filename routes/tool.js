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
const bodyValidator = require('../util/validtor');
const addToolRule = require('../class/requestBodyRule/addToolRequest.js');
const queryToolRule = require('../class/requestBodyRule/queryToolRequest.js');
const ToolService = require('../service/toolService.js');

const router = new Router();

router.post('/add', async (req, res) => {
  const params = req.body;
  const errors = bodyValidator(addToolRule, params);
  if (errors) {
    res.send(Errors.paramError(errors));
  } else {
    res.send(await ToolService.addTool(params));
  }
});

router.post('/list', async (req, res) => {
  const params = req.body;
  const errors = bodyValidator(queryToolRule, params);
  if (errors) {
    res.send(Errors.paramError(errors));
  } else {
    res.send(await ToolService.queryTool(params));
  }
});


module.exports = router;
