var mongoose = require("mongoose");

var profileSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    nameshop: {
      type: String
    },
    vatid: {
      type: String
    },
    codeshop :{
      type : String
    },
    shopid : {
      type : String
    },
    address : {
      type : String
    },
    tel : {
      type : String
    },
    email : {
      type : String,
      match : /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    },
    img: {
      type : String, require:true
    },
    endmsg:{
      type : String
    },

    papersize:{
      type : Number
    }


  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "PROFILE"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;