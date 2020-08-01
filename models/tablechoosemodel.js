var mongoose = require("mongoose");

var orderSchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    zone: {
      type: String
    },
      tbid : {
      type: String
    },
      selected :{
      type : Boolean
    }

  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "TABLECHOOSE"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Tablechoose = mongoose.model("Tablechooses", orderSchema);
module.exports = Tablechoose;