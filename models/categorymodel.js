var mongoose = require("mongoose");

var categorySchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    name: {
      type: String
    }
  

  },
  {
    collection: "CATEGORYS"
  }
);


var Categorys = mongoose.model("categorys", categorySchema);
module.exports = Categorys;