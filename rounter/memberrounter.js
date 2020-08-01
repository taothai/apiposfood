var express = require("express");
var router = express.Router();
var Members = require("../models/membermedel");
const veryfytoken = require('../veryfytoken/token');



router.get("/id/:shopid", veryfytoken, (req, res) => {
  console.log(req.params.shopid)
  Members.find({shopid : req.params.shopid})
  .exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



router.get("/",veryfytoken, (req, res) => {
  Members.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", veryfytoken,(req, res) => {
  Members.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", veryfytoken,(req, res) => {

  //const payload = req.body
  var obj = new Members({
    shopid : req.body.shopid,
    name : req.body.name,
    tel : req.body.tel,
    email : req.body.email,
    dateregister : req.body.dateregister,
    lastdateuse : req.body.lastdateuse,
    countuseservice : req.body.countuseservice,
    orderamount: req.body.orderamount
    
  });
  
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id",veryfytoken, (req, res) => {
  Members.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id",veryfytoken, (req, res) => {
  Members.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;