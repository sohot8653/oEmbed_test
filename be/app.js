const { extract } = require('@extractus/oembed-extractor')
const path = require('path')

var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'view/build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'view/build/index.html'));
})

app.get('/api/search', async function (req, res) {
  const { searchUrl } = req.query;
  let returnValue = {};
  try {
    const resultData = await extract(searchUrl);
    returnValue.resultData = resultData;
    returnValue.resultFlag = 1;
  } catch {
    returnValue.resultFlag = 0;
  }
  res.send(returnValue);
});

app.listen(8080);