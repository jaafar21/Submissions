const express = require("express");
const app= express();
const port = 3000;
app.get('/', (req, res) => { 
res.send('<h1>Ok</h1>');
});

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });