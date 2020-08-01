var mongoose = require("mongoose");

var foodSchema = mongoose.Schema(
  {
    shopid :{
      type :String
   },
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
   
    collection: "FOODS"
  }
);


var Food = mongoose.model("foods", foodSchema);
module.exports = Food;