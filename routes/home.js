/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Router = require('express-promise-router');

const router = new Router();

router.get('/', async (req, res)=>{
  res.send('hi');
});

router.get('/health', async (req, res)=>{
  res.send('ok');
});

module.exports = router;
