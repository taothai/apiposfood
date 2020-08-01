var express = require("express");
var router = express.Router();
var Sumorders = require("../models/sumordermedel");



// GET all

router.get("/", (req, res) => {
  Sumorders.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Sumorders.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/", (req, res) => {

  var obj = new Sumorders({
    shopid : req.body.shopid,
    orderid : req.body.orderid,
    listproduct : req.body.listproduct,
    price : req.body.price,
    datetime : req.body.datetime,
    tableid : req.body.tableid
  });
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Sumorders.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });

});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Sumorders.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;