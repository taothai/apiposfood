var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')


var Food = require('./rounter/foodrouter');
var Order = require('./rounter/orderrouter');
var Product = require('./rounter/productrouter');
var Image = require('./rounter/uppicrounter');
var Select = require('./rounter/selectrounter');
var Tables = require('./rounter/tablechooserounter');
var Sumorder = require('./rounter/sumorderrouter');
var Members = require('./rounter/memberrounter');
var Categorys = require('./rounter/categoryrounter');
var Billsid = require('./rounter/billsrounter');
var Profile = require('./rounter/profilerouter');
var Uploadimge = require('./rounter/uploadimagerouter');
var Admin = require('./rounter/adminrount');
var Money = require('./rounter/money/moneyrouter')

dotenv.config()
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser: true })
  .then(() => {
    console.log("connect to database  !!!");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

 
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
      return res.send(200);
  } else {
      return next();
  }
});



app.use('/api/select',Select);
app.use('/api/food',Food);
app.use('/api/order',Order);
app.use('/api/list',Product);
app.use('/api/upload',Image);
app.use('/api/table',Tables);
app.use('/api/sumorder',Sumorder);
app.use('/api/member',Members);
app.use('/api/category',Categorys);
app.use('/api/bills',Billsid);
app.use('/api/profile',Profile);
app.use('/api/uploadimg',Uploadimge);
app.use('/api/admin', Admin);
app.use('/api/money', Money);


var port = process.env.PORT || 8500;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});

