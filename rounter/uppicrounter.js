var express = require("express");
var router = express.Router();
var Uppic = require("../models/uppicmodel");
const multer = require('multer');

const storage = multer.diskStorage({
   
    destination: function(req,file,cb){
            cb(null,'uploads')
    },
    filename : function(req,file,cb){
            cb(null, file.fieldname+'-'+Date.now().toISOString +file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
  //reject file
  if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
    cb(null,true)
  }else{
    cb(null,false)

  }
}
const upload = multer({storage : storage, limits :{
   fileSize: 1024*1024*5
},
      fileFilter : fileFilter
});



// GET all

router.get("/", (req, res) => {
    Uppic.find().exec((err, data) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(data);
    });
  });


// POST (create new data)
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file);

    //const payload = req.body
    var obj = new Uppic({
      name : req.body.name,
      price : req.body.price,
      image : req.file.path
    });

     obj.save((err, data) => {
      if (err) return res.status(400).send(err);
      res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
    });
  });

  module.exports = router;