const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ip = require('ip');
const log4js = require('log4js');
const config = require('./conf/config.js');
const MountRoutes = require('./routes/index.js');
const logger = log4js.getLogger('server');
const CROS = require('./middleware/cros.js');
const basicAuth = require('./middleware/basicAuth.js');

log4js.configure({
  appenders: { server: { type: 'file', filename: './logs/access.log' } },
  categories: { default: { appenders: ['server'], level: 'info' } }
});

app.use( express.static('public'));
app.use('/static', express.static('logs'));
app.use(express.json());
app.use(CROS);
app.use(basicAuth);
MountRoutes(app);

logger.info(`server running on port ${PORT} ip: ${ip.address()} env: ${process.env.NODE_ENV}`);

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
