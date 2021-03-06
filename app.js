const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, function(){
    console.log(`Servidor en puerto 3000`);
})

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/home.html'));
});

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/register.html'));
});

app.get('/login',function (req,res){
    res.sendFile(path.resolve(__dirname,'views/login.html'));    
});
