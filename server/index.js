import { createRequire } from 'module';
const require=createRequire(import.meta.url)
const express = require("express");
const cors=require("cors")
const PORT = process.env.PORT || 9000;
import bodyParser from 'body-parser';

const app = express();

import * as Mydata from './data.js'
app.use(cors())
app.use(bodyParser.json()); 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/devices", (req, res) => {
    console.log("hii")
    res.json({ data: Mydata.data});
  });

  app.get("/devices/:id", (req, res) => {
    let id=req.params.id
    console.log(id)
    res.json({ data: Mydata.Device_details_object[id-1]});
  });  
  app.post("/user", (req, res) => {
    let username=req.body.username
    let password=req.body.password
    console.log(password)
    const userData = Mydata.database.find((user) => user.username === username);
    console.log(userData)
    res.json({ data: userData});

  }); 

  