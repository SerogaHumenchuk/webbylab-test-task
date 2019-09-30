const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./routes')(app);

// Create a server
const server = app.listen(8081, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('App listening at http://localhost', host, port);
});
