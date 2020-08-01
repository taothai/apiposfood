var mongoose = require("mongoose");

var moneySchama  = mongoose.Schema({

name : {
    type : String
},
moneyselect :{ 
    type :String
},
notic: {
     type :String
},
shopid:{
    type : String
},
datetime :{
    type :String
},
user : {
     type :String
},
category : {
     type : String
}

})

module.exports = mongoose.model('moneydata',moneySchama)