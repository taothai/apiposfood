var express = require("express");
var router = express.Router();
var Money = require("../../models/money/money");
const veryfytoken = require('../../veryfytoken/token');


router.get("/id/:shopid", veryfytoken, (req, res) => {
  console.log(req.params.shopid)
  Money.find({shopid : req.params.shopid})
  .exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});



// POST (create new data)
router.post("/",veryfytoken ,(req, res) => {
  
  //const payload = req.body
  var obj = new Money({
    shopid : req.body.shopid,
    name : req.body.name,
    moneyselect : req.body.moneyselect,
    notic : req.body.notic,
    datetime : req.body.datetime,
    user : req.body.user,
    category : req.body.category,

  });

  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย"+ "Order");
  });
});




      router.put("/:_id", (req, res) => {
        Money.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
          if (err) return res.status(400).send(err);
          res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
        });

      });


router.delete("/:_id", (req, res) => {
  Money.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;