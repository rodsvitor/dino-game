const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get('/', (request, response) => {
  return response.sendFile(__dirname + "/index.html");
});

app.listen(3333);