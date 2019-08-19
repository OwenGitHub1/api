const app = require('express')();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ok');
});

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
