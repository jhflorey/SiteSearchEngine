var express = require('express');
var router = express.Router();

Website = require('../models/website');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var searchText = req.body.searchText;
  var searchType = req.body.searchType;

  if(searchType =='website'){
    Website.searchWebsites(searchText, function(err, websites){
      console.log(websites);
      if(err){
        console.log(err);
        res.send(err);
      }
      var model = {
        websites: websites.results
      }
      res.render('website_results', model);
    });
  } else if(searchType == 'news'){

  } else {
    res.send('Please choose a type');
  }
});

module.exports = router;
