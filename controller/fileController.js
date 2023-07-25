const fs = require('fs');
const csvParser = require('csv-parser');
const CSV = require('../modals/csv');
const path = require('path');

module.exports.upload=async(req,res)=>{
       // console.log(req.file);
       if(!req.file) {
              return res.redirect('/');     
       }
       if(req.file.mimetype != "text/csv") {
              return res.redirect('/');     
       }
       let file = await CSV.create({
              fileName: req.file.originalname,
              filePath: req.file.path,
              file: req.file.filename
       });    
       return res.redirect('/');     
}


module.exports.view = async(req, res) =>{
           console.log(req.params);
           let csvFile = await CSV.findOne({file: req.params.id});
       //     console.log(csvFile);
           const results = [];
           const header =[];
           fs.createReadStream(csvFile.filePath) //seeting up the path for file upload
           .pipe(csvParser())
           .on('headers', (headers) => {
               headers.map((head) => {
                   header.push(head);
               });
              //  console.log(header);
           })
           .on('data', (data) =>
           results.push(data))
           .on('end', () => {
              //  console.log(results.length);
              //  console.log(results);
               res.render("file_viewer", {
                   title: "File Viewer",
                   fileName: csvFile.fileName,
                   head: header,
                   data: results,
                   length: results.length
               });
           });
       }

module.exports.delete = async function(req, res) {
       await CSV.deleteOne({file: req.params.id});            
       return res.redirect("/");
}