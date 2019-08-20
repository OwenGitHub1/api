const app = require('express')();
const path = require('path');
const PORT = process.env.PORT || 3000;
const ip = require('ip');

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/api/sys-info', (req, res) => {
  let result = {ip:ip.address(), port:PORT};
  res.send(JSON.stringify(result));
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
