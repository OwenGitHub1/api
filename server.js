const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ip = require('ip');
const path = require('path');
const request = require('request');
const log4js = require('log4js');
const config = require('./conf/config');
const MountRoutes = require('./routes/index');
const logger = log4js.getLogger('server');
const CROS = require('./middleware/cros');

log4js.configure({
  appenders: { server: { type: 'file', filename: './logs/access.log' } },
  categories: { default: { appenders: ['server'], level: 'info' } }
});

app.use(express.static(path.join(__dirname, 'logs')));
app.use(express.json());
app.use(CROS);
MountRoutes(app);

app.get('/api/sys-info', (req, res) => {
  let result = {ip: ip.address(), port: PORT};
  res.send(JSON.stringify(result));
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
