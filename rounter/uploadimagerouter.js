var express = require("express");
var router = express.Router();
var Profile = require("../models/uploadimgmodel");
const multer = require('multer');


//อัพโหลดภาพ
const storage = multer.diskStorage({
   
  destination: function(req,file,cb){
          cb(null,'uploads')
  },
  filename : function(req,file,cb){
          cb(null,file.fieldname + '-' + Date.now()+file.originalname);
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
  Profile.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Profile.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});


// POST (create new data)
router.post("/",upload.single('img'), (req, res) => {
  console.log(req.file.path);

  var obj = new Profile({
   img : req.file.path,
  });
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      pathfile : req.file.path
    })
  });
});


// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Profile.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;