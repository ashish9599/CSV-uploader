const File=require('../modals/csv')

module.exports.home=async(req,res)=>{
const file=await File.find({});
// console.log(file);
    return res.render('home',{title:"CSV",
files:file
})
}