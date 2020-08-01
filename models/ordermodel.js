var mongoose = require("mongoose");

var orderSchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    tb: {
      type: String
    },
    listfood : {
      type : String
    },
    datetime : {
      type : String
    }

  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "ODERS"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Order = mongoose.model("order", orderSchema);
module.exports = Order;