var mongoose = require("mongoose");

var imageSchema = mongoose.Schema(
  {
     shopid :{
    type :String
    },
    img: {
      type : String,require:true
    }
  },
  {
    collection: "IMAGES"
  }
);

module.exports = mongoose.model("images",imageSchema);
