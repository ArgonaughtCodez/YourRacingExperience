var express = require("express");
var router = express.Router();

var Series          = require("../models/series"),
    Seasons         = require("../models/seasons"),
    Races           = require("../models/races"),
    User            = require("../models/user"),
    Posts           = require("../models/posts");

    
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'argonaught', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});   

/************************************
Routes on the index.js file :

1) Race Route

************************************/
// 1) Race Route
router.get("/race/:series/:season/:race", function(req, res){
    var sideBarVariable = 1;
    var perPage = 6;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    var tabName = req.params.season + " "+ req.params.race + " | " + req.params.series
    var description = "Displaying all posts from the "+ req.params.season + req.params.race + " Race!";
    var keywords = "Racing, YourRacingExperience," + req.params.series + ", " + req.params.season+ ", " + req.params.race;
    Series.find({series_short: req.params.series, show: true},null, {sort: {'reddit_subscribers': 1}}, function(err, series){
       if(err || series.length === 0){
           console.log("Race Route - No Series or Error");
           return res.redirect("/");
        } else {
            Seasons.find({series: req.params.series, season_year:req.params.season, show: true}, function(err, seasonFound){
              if(err || seasonFound.length === 0){
                    console.log("Race Route - No Season or Error");
                    return res.redirect("/series/"+req.params.series);
              } else {
                    Seasons.find({series: req.params.series, show: true},null, {sort: {'season_order': 1}}, function(err, seasons){
                       if(err){
                           console.log(err);
                       } else {
                           Races.find({series: req.params.series, year:req.params.season, race_name: req.params.race, show: true}, function(err, racesFound){
                              if(err || racesFound.length === 0){
                                    console.log("Race Route - No Race or Error");
                                    return res.redirect("/season/"+req.params.series+"/"+req.params.season);
                              } else {
                                    Races.find({series: req.params.series, show: true},null, {sort: {'race_order': -1}}, function(err, races){
                                       if(err){
                                        console.log("Race Route - No Race Found!");
                                           console.log(err);
                                       } else {
                                            Posts.find({series: req.params.series, year: req.params.season, race: req.params.race},null, {sort: {'_id': -1}}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function(err, posts){
                                                
                                                Posts.count({series: req.params.series, year: req.params.season, race: req.params.race}).exec(function (err, count) {
                                                if(err){
                                                    console.log("Race Route - No Posts Found");
                                                   console.log(err);
                                                } else {
                                                    for (var i = posts.length; i--;){
                                                        var string = cloudinary.image(posts[i].image_id, {width: 500,  crop: "fill"},{quality: 100 });
                                                        var splitString = string.split("'");
                                                        var longest = splitString.sort(function (a, b) { return b.length - a.length; })[0];
                                                        posts[i].resizedImage = longest;
                                                    }
                                                    
                                                  res.render("races/index", { sideBarVariable: sideBarVariable ,posts: posts, races: races, series: series, seasons: seasons, season: req.params.season, race: req.params.race, tabName: tabName, description: description, keywords: keywords,current: pageNumber, perPage: perPage, count: count, pages: Math.ceil(count / perPage)});  
                                                }
                                            });  }); 
                                       }
                                    }); 
                                }
                            }); 
                       }
                    }); 
                }
            }); 
        }
    }); 
});
module.exports = router;