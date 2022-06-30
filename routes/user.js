var express = require('express');
var router = express.Router();
var distributerHelper=require('../helpers/distributer-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  distributerHelper.getCurrentMovie().then((CurrentMovieData)=>{
    console.log(CurrentMovieData)
    res.render('user/view-currentmovie',{user:true,CurrentMovieData});
   })
});

module.exports = router;
