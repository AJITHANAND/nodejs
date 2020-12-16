const { response } = require('express');
var express = require('express');
var router = express.Router();
const productHelper=require('../helpers/product-helpers')
const userHelpers=require('../helpers/user-helpers')
const verifyLogin=(req,res,next)=>{
  if(req.session.loggedIn){
    next()
  }
  else{
    res.redirect('/login')
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
  console.log(user)
  productHelper.getAllProducts().then((products)=>{
    res.render('user/view-products',{products,user})
  })
});
router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }
  else
  {
    res.render('user/login',{"loginError":req.session.loginError})
    req.session.loginError=null
  }
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response)
    req.session.loggedIn=true
    req.session.user=response
    res.redirect('/')
  })
})

router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      req.session.loginError="Invalid username or password"
      res.redirect('/login')
    }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})


router.get('/cart',verifyLogin,async(req,res)=>{
  let products=await userHelpers.getCartProducts(req.session.user._id)
  res.render('user/cart',{products,user:req.session.user})
  
})

router.get('/add-to-cart/:id',verifyLogin,(req,res)=>{
  userHelpers.addToCart(req.params.id,req.session.user._id).then(()=>{
    res.redirect('/')
  })
})
router.post('/change-product-quantity',(req,res,next)=>{
    userHelpers.changeProductQuantity(req.body).then((response)=>{
      res.json(response)
    })
})

router.get('/delete-cart-item/:id',verifyLogin,(req,res,next)=>{
  
})

module.exports = router;
