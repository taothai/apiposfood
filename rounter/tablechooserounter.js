var express = require("express");
var router = express.Router();
var Tables = require("../models/tablechoosemodel");
const veryfytoken = require('../veryfytoken/token');
 

//get from shopid
router.get("/id/:shopid", veryfytoken, (req, res) => {
  console.log(req.params.shopid)
  Tables.find({shopid : req.params.shopid})
  .exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

/*
router.get("/", (req, res) => {
  Tables.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});
*/
// GET 1
router.get("/:_id", (req, res) => {
  Tables.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", (req, res) => {
  console.log(req.body);

  //const payload = req.body
  var obj = new Tables({
    shopid : req.body.shopid,
    zone : req.body.zone,
    tbid : req.body.tbid,
    selected : req.body.selected

  });

  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  console.log(req.body)
  Tables.findOneAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Tables.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;