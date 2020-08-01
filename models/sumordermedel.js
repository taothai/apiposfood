var mongoose = require("mongoose");

var sumorderSchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    orderid: {
      type: String
    },
    listproduct: {
      type: Object
    },
    price : {
      type : Number
    },
    datetime : {
      type : String
    },
    timeorder : {
      type : String
    },
    tableid : {
      type : String
    }


  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "SUMORDERS"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Sumorders = mongoose.model("sumorder", sumorderSchema);
module.exports = Sumorders;