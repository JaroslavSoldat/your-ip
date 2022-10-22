import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const ipFromRequest = req.socket.remoteAddress;
  const ipFromProxy = req.headers['x-forwarded-for'];

  const ip = ipFromProxy || ipFromRequest;
  const ipSource = ipFromProxy ? 'from proxy x-forwarded-for header' : 'directly from request';

  console.info(`Request from ${ip} (${ipSource})`);

  res.status(200);
  res.send(`
    <h3>Your IP address is ${ip} (${ipSource})</h3>
    <h3>Headers:</h3>
    <pre>${JSON.stringify(req.headers, null, 2)}</pre>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
