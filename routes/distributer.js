var express = require('express');
var router = express.Router();
var distributerHelper=require('../helpers/distributer-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
   distributerHelper.getCurrentMovie().then((CurrentMovieData)=>{
    console.log(CurrentMovieData)
    res.render('distributer/view-products',{distributer:true,CurrentMovieData});
   })
});

router.get('/add-current',function(req,res){
    res.render('distributer/add-current',{distributer:true})
})
router.post('/add-current',(req,res)=>{
    //console.log(req.body);
    //console.log(req.files.mImage);

    distributerHelper.addCurrentMovie(req.body,(id)=>{
      let image=req.files.mImage
      image.mv('./public/movie-images/'+id+'.jpg',(err,done)=>{
        if(!err){
          res.render('distributer/add-current');
        }else{
          console.log(err);
        }
      })
    })
})
module.exports = router;