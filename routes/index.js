const express=require('express');
const router=express.Router();
const fileController=require('../controller/fileController')
const homeController=require('../controller/homeController')
const multer=require('multer') 
const upload = multer({ dest: 'uploads/files'})


router.get('/',homeController.home);
 router.post('/upload',upload.single('file') ,fileController.upload);
 router.get('/view/:id',fileController.view);
 router.get('/delete/:id', fileController.delete);




 module.exports=router;