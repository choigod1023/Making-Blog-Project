const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
})

app.get('/1',function(req,res){
    res.sendFile(__dirname+'/public/html1.html');
})

app.get('/2',function(req,res){
    res.sendFile(__dirname+'/public/html2.html');
})

app.listen(3721,function(){
    console.log('Server open');
})