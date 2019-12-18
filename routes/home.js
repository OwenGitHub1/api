/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Router = require('express-promise-router');
const {sequelize} = require('../db/sequelize');
const Errors = require('../util/error');
const router = new Router();

router.get('/', async (req, res)=>{
  res.send('hi');
});

router.get('/health', async (req, res)=>{
  res.send('ok');
});

router.post('/init', async (req, res) =>{
  // 根据 model自动创建表
  sequelize
    .sync()
    .then(() => {
      console.log('init db ok');
      res.send(Errors.serverOK('init db ok'));
    })
    .catch(err => {
      res.send(JSON.stringify(err.message));
      console.log('init db error', err)
    })
});

module.exports = router;
