const express = require('express');
const path = require('path');

const assetFolder = path.resolve(__dirname, '../public');

const app = express();

app.use('/', express.static(assetFolder));
app.get('/*', (req, res) => {
  res.sendFile(assetFolder + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('listening on port '+ port);
});