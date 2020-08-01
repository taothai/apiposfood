var mongoose = require("mongoose");

var orderSchema = mongoose.Schema(
  {
    shopid :{
       type :String
    },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    image : {
      type : String, required: true
    },
    category : {
      type : String
    },
    sellcount : {
      type : Number
    },
    selectcount : {
      type : Number
    },
    sumprice: {
      type : Number
    }


  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "PRODUCTS"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Products = mongoose.model("products", orderSchema);
module.exports = Products;