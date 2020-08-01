var express = require("express");
var router = express.Router();
var Profile = require("../models/profilemodel");
const multer = require('multer');
const veryfytoken = require('../veryfytoken/token');


//อัพโหลดภาพ
const storage = multer.diskStorage({
   
  destination: function(req,file,cb){
          cb(null,'uploads')
  },
  filename : function(req,file,cb){
          cb(null, file.fieldname+'-'+ Date.now().toISOString +file.originalname);
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


//get from shopid
router.get("/id/:shopid", veryfytoken, (req, res) => {
  console.log(req.params.shopid)
  Profile.find({shopid : req.params.shopid})
  .exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", veryfytoken,(req, res) => {

  //const payload = req.body
  var obj = new Profile({
    nameshop : req.body.nameshop,
    shopid : req.body.shopid,
    vatid : req.body.vatid,
    codeshop : req.body.codeshop,
    address : req.body.address,
    tel : req.body.tel,
    email : req.body.email,
    img : req.body.img,
    papersize : req.body.papersize

  });

  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", veryfytoken, (req, res) => {
  Profile.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id", veryfytoken, (req, res) => {
  Profile.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;