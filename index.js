import * as express from 'express';
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 8080;

const staticDir = path.join(__dirname, '/build');
const htmlPath = path.join(staticDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  fs.writeFileSync(htmlPath, '');
}

const html = fs.readFileSync(htmlPath);
const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  res.status(200);
  res.type('text/html');
  res.send(html);
});

app.listen(port);
console.log('Server started');