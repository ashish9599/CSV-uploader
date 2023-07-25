
const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1/CSV_UPLOADER`);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error'));
db.once('open',function(){
 console.log('Successfully connected to databases')
})

module.exports=db;