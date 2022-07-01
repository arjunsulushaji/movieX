var express = require('express');
const { getUpcommingMovie } = require('../helpers/distributer-helpers');
var router = express.Router();
var distributerHelper=require('../helpers/distributer-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
   distributerHelper.getCurrentMovie().then((CurrentMovieData)=>{
    distributerHelper.getUpcommingMovie().then((UpcommingMovieData)=>{
      res.render('distributer/view-products',{distributer:true,CurrentMovieData,UpcommingMovieData});
    })
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

router.get('/add-upcomming',function(req,res){
  res.render('distributer/add-upcomming',{distributer:true})
})

router.post('/add-upcomming',(req,res)=>{
  // console.log(req.body);
  // console.log(req.files.UpcommingMovieImage);
  distributerHelper.addUpcommingMovie(req.body,(id)=>{
    let image=req.files.UpcommingMovieImage
    image.mv('./public/upcomming-images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render('distributer/add-upcomming');
      }else{
        console.log(err)
      }
    })
  })
})
module.exports = router;