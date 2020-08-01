var express = require("express");
var router = express.Router();
var Member = require("../models/admin");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const veryfytoken = require('../veryfytoken/token')
var moment = require('moment');


router.get('/',veryfytoken,(req,res) => {
    res.json({
       name :  'hello'
    })
});

  

//get from shopid
router.get("/id/:shopid", veryfytoken, (req, res) => {
    console.log(req.params.shopid)
    Member.find({shopid : req.params.shopid})
    .exec((err, data) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(data);
    });
  });
  

router.post('/register' , veryfytoken,  (req,res) =>{

    Member.find({email : req.body.email})
    .exec()
    .then( user => {
        if(user.length >=1){
            return res.status(409).json({
                massage : 'มีอีเมลล์นี้แล้ว'
            })
        }else{
            bcrypt.hash(req.body.password,10,(err,hash) =>{

                if(err){
                    return res.status(500).json({
                        error : err
                 })
                }else{

                    const user = new Member({

                        name : req.body.name,
                        email : req.body.email,
                        password : hash,
                        role : req.body.role,
                        shopid : req.body.shopid,
                        datetime : moment().format("DD-MM-YYYY/HH:MM:SS")


                    })
                    user.save((err, data) => {
                        if (err) return res.status(400).send(err);
                        res.status(201).json({
                                massage : 'User Create'
                        });
                      });
                }

            })

        }
    })

} )

router.post('/login' ,(req,res ) =>{

    Member.find({email : req.body.email})
    .exec(

    )
    .then(user => {
    if(user.length >=1){

                bcrypt.compare(req.body.password,user[0].password, function(err,result){
                    if(err) return res.json({
                        data : 'data'
                    })
                    if(result) {
                        const token=  jwt.sign({
                            userId : user[0]._id,
                            email : user[0].email,
                            usertype: user[0].usertype

                                },
                                'secret',
                                {
                            expiresIn : "24h"
                                  }
                        )

                        return res.status(200).json({
                            token : token,
                            email : user[0].email,
                            id : user[0]._id,
                            role: user[0].role,
                            name: user[0].name

                        })

                    }

                    try {
                        res.status(401).send(' Pass Not match')
                    } catch (error) {
                        res.send('ERR')
                    }

            })

    }else{

        res.status(401).send('Email Not match')
    }
    })
    .catch(err =>{
        res.send('Login ERR')
    })
})

module.exports = router;