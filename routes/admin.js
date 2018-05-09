var express = require("express");
var router = express.Router();
var passport = require("passport");
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

//Requiring all the models
var Series          = require("../models/series"),
    Seasons         = require("../models/seasons"),
    Races           = require("../models/races"),
    User            = require("../models/user"),
    Posts           = require("../models/posts");
    
//Requiring the Middleware
var middleware      = require("../middleware");   

//Requiring Cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({ 
cloud_name: 'argonaught', 
api_key: process.env.CLOUDINARY_API_KEY, 
api_secret: process.env.CLOUDINARY_API_SECRET
});   


/************************************
Routes on the index.js file :

1) Reddit Links 
2) User Profile Page
3) Register Form SHOW
4) Register Form POST
5) Show login Form
6) Show User Edit Form
7) User Edit PUT 1 - Email Change
8) User Edit PUT 2 - Password Change
9) Login - POST
10) Logout Route
11) Forgot Password - SHOW
12) Forgot Password - POST
13) Password Reset - SHOW
14) Password Reset - POST

************************************/   
//===============================
//SERIES ROUTES
//===============================

router.get("/admin/series", middleware.isAdmin, function(req, res){
    var sideBarVariable = 0;
    var tabName = "";
    var description = "";
    var keywords = "";
    Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
       if(err){
           console.log(err);
       } else {
          res.render("series/new.ejs",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
       }
    });    
});

//CREATE New Series ROUTE
router.post("/series", middleware.isAdmin, function(req, res){
    var series_name = req.body.series_name;
    var series_short = req.body.series_short;
    var reddit_subscribers = req.body.reddit_subscribers;
    var reddit_link = req.body.reddit_link;
    var show = req.body.show;
    var newSeries =  {series_name :series_name, series_short: series_short, reddit_subscribers: reddit_subscribers, reddit_link: reddit_link, show: show};
    Series.create(newSeries, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
          res.redirect("/"); 
       }
    });
});

router.put("/admin/series/:id", middleware.isAdmin, function(req, res){
    var sideBarVariable = 0;
    var tabName = "";
        var description = "";
    var keywords = "";
    var reddit_link = req.body.link; 
    var reddit_subscribers = req.body.reddit_subscribers;
    var show = req.body.show;
    var newRedditInfo = { reddit_subscribers: reddit_subscribers,  reddit_link: reddit_link, show: show}

    Series.findByIdAndUpdate(req.params.id, newRedditInfo, function(err, updatedSeries){
           if(err){
               console.log(err);
           }else {
                Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
                   if(err){
                       console.log(err);
                   } else {
                      res.render("series/new.ejs",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
                   }
                });   
           }
    });
});


    
//===============================
//SEASONS ROUTES
//===============================

router.get("/admin/season", middleware.isAdmin, function(req, res){
       var sideBarVariable = 0;
       var tabName = "";
           var description = "";
    var keywords = "";
        Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
           if(err){
               console.log(err);
           } else {
               Seasons.find({},null, {sort: {'season_order': 1}},  function(err, seasons){
                   if(err){
                       console.log(err);
                   } else {
               
                        res.render("seasons/new.ejs",{sideBarVariable: sideBarVariable, series: series, seasons: seasons, tabName: tabName, description: description, keywords: keywords}); 
                   }
    });    
           }
    });    
});

//CREATE New Series ROUTE
router.post("/seasons", middleware.isAdmin, function(req, res){
    var season_year = req.body.season_year;
    var series = req.body.series;
    var season_order = req.body.season_order;
    var show = req.body.show;
    var newSeason =  {season_year :season_year, series: series, season_order: season_order, show: show};
    Seasons.create(newSeason, function(err, newlyCreated){
        
       if(err){
           console.log(err);
       } else {
          res.redirect("/admin/season"); 
       }
    });
});


router.put("/admin/season/:id", middleware.isAdmin, function(req, res){
    var sideBarVariable = 0;
    var tabName = "";
    var season_order = req.body.season_order;
    var show = req.body.show;
    var newSeasonOrder = { season_order: season_order, show: show}

    Seasons.findByIdAndUpdate(req.params.id, newSeasonOrder, function(err, updatedSeason){
           if(err){
               console.log(err);
           }else {
                res.redirect("/admin/season");  
           }
    });
});



//===============================
//RACE ROUTES
//===============================
router.get("/admin/race", middleware.isAdmin, function(req, res){
       var sideBarVariable = 0;
       var tabName = "";
           var description = "";
    var keywords = "";
        Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
           if(err){
               console.log(err);
           } else {
                      res.render("races/new.ejs",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
           }
        });    
});

router.get("/admin/race/:series", middleware.isAdmin, function(req, res){
    var sideBarVariable = 0;
    var tabName = "";
               var description = "";
    var keywords = "";
    Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
        if(err){
            console.log(err);
        } else {
            Seasons.find({series: req.params.series},null, {sort: {'season_order': 1}}, function(err, seasons){
                if(err){
                    console.log(err);
                } else {
                    Races.find({series: req.params.series},null, {sort: {'race_order': 1}}, function(err, races){
                        if(err){
                            console.log(err);
                        } else {
                            res.render("races/show.ejs",{sideBarVariable: sideBarVariable, series: series, seasons: seasons, races: races, seriesPage: req.params.series, tabName: tabName, description: description, keywords: keywords}); 
                        }
                    });
                }
            });
        }
    });    
});





//CREATE New Series ROUTE
router.post("/races", middleware.isAdmin, function(req, res){
    var race_name = req.body.race_name;
    var year = req.body.year;
    var series = req.body.series;
    var race_order = req.body.race_order
    var show = req.body.show;
    var newRace =  {race_name :race_name, year: year, series: series, race_order: race_order, show: show};
    Races.create(newRace, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           res.redirect("/admin/race/"+newlyCreated.series);  
       }
    });
}); 


router.put("/admin/race/:id", middleware.isAdmin, function(req, res){
   
    var race_order = req.body.race_order;
    var show = req.body.show;
    var newRaceOrder = { race_order: race_order, show: show}

    Races.findByIdAndUpdate(req.params.id, newRaceOrder, function(err, updatedRace){
           if(err){
               console.log(err);
           }else {
                res.redirect("/admin/race/"+updatedRace.series);  
           }
    });
});

router.get("/admin/users", middleware.isAdmin, function(req, res){
   var sideBarVariable = 0;
   var tabName = "";
              var description = "";
    var keywords = "";
    Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
        if(err){
            console.log(err);
        } else {
            User.find({}, function(err, users){
                if(err){
                    console.log(err);
                } else {
                    
                            res.render("users.ejs",{sideBarVariable: sideBarVariable, series: series, users: users, seriesPage: req.params.series, tabName: tabName, description: description, keywords: keywords}); 
                     
                }
            });
        }
    }); 
    
});

router.put("/admin/users/:id", middleware.isAdmin, function(req, res){
   
   var admin = req.body.admin;
   var adminInfo = { isAdmin: admin}
   
   User.findByIdAndUpdate(req.params.id, adminInfo, function(err, updatedUser){
      if(err){
          console.log(err);
      } else {
          res.redirect("/admin/users");
      }
   });
});
    



module.exports = router;