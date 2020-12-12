var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
  res.render('index', { products });
});

module.exports = router;
