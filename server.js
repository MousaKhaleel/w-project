const express= require('express');
var app=express();
const cors = require("cors");
app.use(cors());
app.use(express.json())

app.get('/',function(req,res)
{
    res.send('server started');
});

var server=app.listen(8000,function(){
    var host=server.address().address;
    var port=server.address().port;
});