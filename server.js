const app = require('express')();
const path = require('path');
const PORT = process.env.PORT || 3000;
const ip = require('ip');
const request = require('request');
const http = require('http');

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/api/sys-info', (req, res) => {
  let result = {ip: ip.address(), port: PORT};
  res.send(JSON.stringify(result));
});

app.use(function (req, res) {
  if (req.method.toLocaleLowerCase() === 'get') {
    request(req.url, (err, response, body) => {
      if (err) {
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
        res.send(err);
      }
      if (body) {
        res.set(response.headers);
        res.send(body);
      }
    })
  }else {
    res.send(JSON.stringify({method:req.method,error:'request not support now'}));
  }
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
