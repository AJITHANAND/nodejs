const { response } = require('express');
var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

const verifyLogin=(req,res,next)=>{
  if(req.session.adminLogin){
    next()
  }
  else{
    res.render('admin/login')
  }
}
/* GET users listing. */
router.get('/',verifyLogin, function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    console.log(products)
    res.render('admin/view-products',{admin:true,products})
  })
  /* dummy 
  let products=[
    {
      name:"IPHONE 11",
      category:'Mobile',
      description:'High performance',
      image:'https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg'
    },
    {
      name:'IPHONE XR',
      category:'Mobile',
      description:'Mid Range',
      image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669'

    },
    {
      name:'Realme 7',
      category:'Mobile',
      description:'Android Phone',
      image:'https://fdn2.gsmarena.com/vv/bigpic/realme-7.jpg'
    },
    {
      name:'MI 10',
      category:'Mobile',
      description:'Android Phone',
      image:'https://i01.appmifile.com/webfile/globalimg/in/cms/D1301D76-E04D-EF09-6195-53229DE6D543.jpg'
    }
  ]
  */
 // res.render('admin/view-products',{admin:true,products})
});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
  
})
router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)
  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }
      else{
        console.log(err)
      }
    })
    res.render("admin/add-product")
  })
})

router.get('/delete-product/:id',(req,res)=>{
    let productId=req.params.id
    console.log(productId)
    productHelper.deleteProduct(productId).then((response)=>{
      res.redirect('/admin/')
    })
})
router.get('/edit-product/:id',async(req,res)=>{
  let product=await productHelper.getProductDetails(req.params.id)
  res.render('admin/edit-product',{product})
})

router.post('/edit-product/:id',(req,res)=>{
  let id=req.params.id
  productHelpers.updateProduct(req.params.id,req.body).then(()=>{
    res.redirect('/admin')
    if(req.files.Image){ 
      let image=req.files.Image
      image.mv('./public/product-images/'+id+'.jpg')
    }
    
  })
})

router.get('/login',(req,res)=>{
 if(verifyLogin){
   res.redirect('/admin')
 }else{
   res.render('admin/login')
 }
})
router.post('/login',(req,res)=>{
  let email='admin@mail.com'
  let pass='admin'
  if(req.body.Email===email&&req.body.Password===pass){
    req.session.adminLogin=true
    res.redirect('/admin')
  }else{
    res.redirect('/login')
  }
})

module.exports = router;
