var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    { 
      MoiveName:'Bermuda',
      Image:"https://static.toiimg.com/photo/83036150.cms"
    },
    {
      MoiveName:'Oolu',
      Image:"https://www.nairtejas.com/wp-content/uploads/2019/12/Olu-Malayalam-movie-poster-by-Oldmonks-500x731.jpg"
    },
    {
      MoiveName:'Mayanadhi',
      Image:"https://i.pinimg.com/originals/1b/34/6f/1b346f55dda253316a16e0ffcecc56e3.jpg"
    },
    {
      MoiveName:'June',
      Image:"https://m.media-amazon.com/images/M/MV5BMTdhMTIwMGYtYjk1NC00MDdjLTg4MmItZmMxOWNmYTYxZjg0XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"
    }
  ]
  res.render('index', {products,user:true});
});

module.exports = router;
