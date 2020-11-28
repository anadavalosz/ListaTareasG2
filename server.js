'use strict';

const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", function (req, res) {
  res.send("HOLA MUNDO");
});

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("http://localhost:" + port);
});
