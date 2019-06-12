  const express = require("express");
  const app= express();
  const port = 3000;
  app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });
//////*step3*/
  app.get('/', (req, res) => { 
      res.send('<h1>Ok</h1>'); }); 
      app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"}); });

  app.get('/time', (req, res) => { 
    var time = new Date (); 
    res.send({status:200, message: time.getHours() + ":"+ time.getMinutes() + ":" + time.getSeconds()}); });
   /*STEP 4*////////////
  app.get('/hello/:id?', (req, res) =>{ 
    if(req.params.id !== undefined){ res.send ({ status:200, message:"Hello," + req.params.id })} 
    else { res.send ({ status:200, message:"Hello," })} });
 app.get('/search', (req, res) =>{ 
    if(req.query.s !== undefined && req.query.s !== ""){
    res.send({status:200, message:"ok", data:req.query.s})
      } else {
     res.send({status:500, error:true, message:"you have to provide a search"}) } } );
