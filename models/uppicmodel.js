var mongoose = require("mongoose");

var uppicSchema = mongoose.Schema(
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
      type : String,require:true
    }

  },
  {
    collection: "UPPIC"
  }
);

var Uppic = mongoose.model("uppic", uppicSchema);
module.exports = Uppic;