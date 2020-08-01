var mongoose = require("mongoose");

var adminSchama  = mongoose.Schema({

name : {
    type : String
},
password :{
    type :String
},
email : {
     type :String
},
role :{
    type : String
},
shopid:{
    type : String
},
datetime :{
    type :String
}

})

module.exports = mongoose.model('admindata',adminSchama)