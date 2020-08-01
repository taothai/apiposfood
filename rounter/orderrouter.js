var express = require("express");
var router = express.Router();
var Oder = require("../models/ordermodel");

// GET all

router.get("/", (req, res) => {
  Oder.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Oder.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  const payload = req.body
  console.log(payload)
  var obj = new Oder({
    shopid : req.body.shopid,
    tb : req.body.tb,
    listfood : req.body.listfood,
    datetime : req.body.datetime
  
  });
  
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Oder.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Oder.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;