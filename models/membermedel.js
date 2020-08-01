var mongoose = require("mongoose");

var memberSchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    name: {
      type: String
    },
    tel: {
      type: String
    },
    email : {
      type : String
    },
    dateregister : {
      type : String
    },
    lastdateuse :{
      type : String
    },
    countuseservice : {
      type : Number
    },
    orderamount :{
      type : Number
    }
    

  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "MEMBERS"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Members = mongoose.model("members", memberSchema);
module.exports = Members;