var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');

// Website Schema
var websiteSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

var Website = module.exports = mongoose.model('Website', websiteSchema);

module.exports.addWebsite = function(website, callback){
  Website.create(website, callback);
}
