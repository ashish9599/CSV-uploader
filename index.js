const express=require('express');
const expressLayout=require('express-ejs-layouts');
const port =8000;
const app=express()
const db=require('./config/mongoose')
const bodyParser = require('body-parser');




app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(expressLayout);
app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));






app.listen(port,(err)=>{
    if(err){
    console.log("Error",err);
   return;
    }
    console.log(`Server is runing on port ${port}`);
})