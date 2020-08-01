var mongoose = require("mongoose");

var billSchema = mongoose.Schema(
  {
 
    idcounter :{
      type : Number
    }
  },
  {
  
    collection: "BILLID"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Billid = mongoose.model("billid", billSchema);
module.exports = Billid;