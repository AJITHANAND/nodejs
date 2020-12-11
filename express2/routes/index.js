var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=["Ajith","Anand","Moonattu"]
  const sample={name:"Ajith",comments:{comment:"this is a sample comment",date:"01-01-2000"}}
  const person={name:"Ajith Anand",admin:true}
 // res.render('index', { title: 'Test Website' ,name:'Ajith' });
 // res.render('index',{values})
 //res.render('index',{sample})
  //res.render('index',{person})
  res.render('index',{sample})
});

module.exports = router;
