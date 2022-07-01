const { response } = require('express');
var express = require('express');
var router = express.Router();
var distributerHelper=require('../helpers/distributer-helpers');
const userHelpers=require('../helpers/user-helpers');
/* GET home page. */
router.get('/', function(req, res, next) {
  let users=req.session.user
  // console.log(users);
  distributerHelper.getCurrentMovie().then((CurrentMovieData)=>{
    distributerHelper.getUpcommingMovie().then((UpcommingMovieData)=>{
      res.render('user/view-currentmovie',{user:true,CurrentMovieData,UpcommingMovieData,users});
    })
   })
});

router.get('/user-login',(req,res)=>{
  res.render('user/user-login')
})

router.get('/user-signup',(req,res)=>{
  res.render('user/user-signup')
})

router.post('/user-signup',(req,res)=>{
  userHelpers.dosignup(req.body).then((response)=>{
    console.log(response)
  })
})

router.post('/user-login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/user-login')
    }
  })
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
