const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hemsida.html'));
});

app.post('/updateData', (req, res) => {
  const newData = JSON.stringify(req.body, null, 2);
  fs.writeFileSync('hemsida.json', newData);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

