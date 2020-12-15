var express = require('express');
var router = express.Router();
const productHelper=require('../helpers/product-helpers')
const userHelpers=require('../helpers/user-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    console.log(products)
    res.render('user/view-products',{admin:false,products})
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req,res).then((response)=>{
    console.log(response)
  })
})
module.exports = router;
