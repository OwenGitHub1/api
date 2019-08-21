const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ip = require('ip');
const path = require('path');
const request = require('request');
const log4js = require('log4js');
log4js.configure({
  appenders: { server: { type: 'file', filename: './logs/access.log' } },
  categories: { default: { appenders: ['server'], level: 'info' } }
});
const logger = log4js.getLogger('server');
app.use(express.static(path.join(__dirname, 'logs')));

app.get('/health', (req, res) => {
  res.send('hi');
});

app.get('/test', (req, res) => {
  request('http://google.com', {},(err, response, body) => {
    if (err) {
      logger.error(err);
      res.send(err);
    }
    if (body) {
      res.send(body);
    }
  })
});

app.get('/api/sys-info', (req, res) => {
  let result = {ip: ip.address(), port: PORT};
  res.send(JSON.stringify(result));
});

app.use(function (req, res) {
  logger.info(JSON.stringify({url: req.url, method: req.method}));
  if (req.method.toLocaleLowerCase() === 'get') {
    request(req.url, {},(err, response, body) => {
      if (err) {
        logger.error(err);
        res.send(err);
      }
      if (body) {
        res.set(response.headers);
        res.send(body);
      }
    })
  } else if (req.method.toLocaleLowerCase() === 'post') {
    request.post(req.url, (err, response, body) => {
      if (err) {
        logger.error(err);
        res.send(err);
      }
      if (body) {
        res.set(response.headers);
        res.send(body);
      }
    })
  } else {
    logger.error('request not support now');
    res.send(JSON.stringify({method: req.method, error: 'request not support now'}));
  }
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
