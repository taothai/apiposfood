var express = require("express");
var router = express.Router();
var Categorys = require("../models/categorymodel");
const veryfytoken = require('../veryfytoken/token');



router.get('/',veryfytoken,(req,res) => {
  res.json({
     name :  'hello'
  })
});

//get from shopid
router.get("/id/:shopid", veryfytoken, (req, res) => {
  console.log(req.params.shopid)
  Categorys.find({shopid : req.params.shopid})
  .exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", (req, res) => {

  //const payload = req.body
  var obj = new Categorys({
    shopid : req.body.shopid,
    name : req.body.name,
  });
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Categorys.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Categorys.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;