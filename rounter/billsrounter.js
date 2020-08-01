var express = require("express");
var router = express.Router();
var Bills = require("../models/billidmodel");
var mongoose = require("mongoose");



// GET all

router.get("/", (req, res) => {
  Bills.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Bills.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", (req, res) => {

  //const payload = req.body
  var obj = new Bills({
    shopid : req.body.shopid,
    idcounter  : req.body.billcounter, 
    
  });
  
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Bills.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Bills.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;