const jwt = require('jsonwebtoken')

module.exports =  function (req,res, next){

const token = req.header('auth-token');

if(typeof token == 'undefined') return res.sendStatus(404)

  try {
    const veryfied = jwt.verify(token,'secret')
    req.user = veryfied;
    next();
  } catch (error) {

    res.sendStatus(403)
  }

}