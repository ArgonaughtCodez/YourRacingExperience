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
Routes on the series.js file :

1) Root Route 
2) Series Route

************************************/


// 1) Root Route
router.get("/", function(req, res){
    var sideBarVariable = 0;
    var tabName = "";
    var perPage = 96;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    var description ="The Home Page of YourRacingExperience. Share your racing experiences!"
    var keywords = "Racing, YourRacingExperience, Experience, Formula 1, F1, Formula One, Nascar, NASCAR, WRC, Rally, Indy, IndyCar, WSBK, World Super Bike, WRX, Rally Cross, WEC, World Endurance, MotoGP, FE, Formula E";
    Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
        
        if(err){
            console.log("Root Route - No Series!");
            console.log(err);
        } else {
            
            Posts.find({},null, {sort: {'_id': -1}}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function(err, posts){
                
                Posts.count().exec(function (err, count) {
             
                if(err){
                    console.log("Root Route - No Posts!");
                    console.log(err);
                } else {
                    for (var i = posts.length; i--;){
                        var string = cloudinary.image(posts[i].image_id, {width: 500,  crop: "fill"},{quality: 100 });
                        var splitString = string.split("'");
                        var longest = splitString.sort(function (a, b) { return b.length - a.length; })[0];
                        posts[i].resizedImage = longest;
                    }
                    res.render("landing", {sideBarVariable: sideBarVariable, posts: posts, series: series, tabName: tabName, description: description, keywords: keywords,current: pageNumber, perPage: perPage, count: count, pages: Math.ceil(count / perPage)});  
                }
            });
            
        }); 
        }
    });      
});




// 2) Series Route
router.get("/series/:series", function(req, res){
    var sideBarVariable = 1;
    var season = "All";
    var perPage = 6;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    var tabName = req.params.series;
    var description ="All the posts about "+ req.params.series +". Share your racing experiences!"
    var keywords = "Racing, YourRacingExperience," + req.params.series;
    Series.find({series_short: req.params.series, show: true},null, {sort: {'reddit_subscribers': 1}},function(err, series){
        
        if(err || series.length === 0){
                console.log("Series Route - No Series!");
                console.log(err);
            res.redirect("/"); 
        } else {
            
            Seasons.find({series: req.params.series, show: true},null, {sort: {'season_order': 1}}, function(err, seasons){
                if(err){
                    console.log("Series Route - No Series!");
                    console.log(err);
                } else {
                    
                    Races.find({series: req.params.series, show: true},null, {sort: {'race_order': -1}}, function(err, races){
                        if(err){
                            console.log("Series Route - No Races!");
                            console.log(err);
                        } else {
                            
                            Posts.find({series: req.params.series},null, {sort: {'_id': -1}}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function(err, posts){
                                
                                Posts.count({series: req.params.series}).exec(function (err, count) {
                                if(err){
                                    console.log("Series Route - No Posts!");
                                    console.log(err);
                                } else {
                                    for (var i = posts.length; i--;){
                                        var string = cloudinary.image(posts[i].image_id, {width: 500,  crop: "fill"},{quality: 100 });
                                        var splitString = string.split("'");
                                        var longest = splitString.sort(function (a, b) { return b.length - a.length; })[0];
                                        posts[i].resizedImage = longest;
                                    }
                                    
                                    res.render("series/index", { sideBarVariable: sideBarVariable ,posts: posts, races: races, series: series, seasons: seasons, season: season, tabName: tabName, description: description, keywords: keywords, current: pageNumber, perPage: perPage, count: count, pages: Math.ceil(count / perPage)});  
                                }
                            })
                                
                            }); 
                        }
                    }); 
                }
            }); 
        }
    }); 
});

module.exports = router;