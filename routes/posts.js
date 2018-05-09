var express = require("express"),
    expressSanitizer = require("express-sanitizer");
var router = express.Router();

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

var Series          = require("../models/series"),
    Seasons         = require("../models/seasons"),
    Races           = require("../models/races"),
    User            = require("../models/user"),
    Posts           = require("../models/posts");
    
var middleware      = require("../middleware");
//===============================
//POSTS ROUTES
//===============================
router.get("/post/new", middleware.isLoggedIn, function(req, res){
    var sideBarVariable = 0;
    var tabName = "Post Create ";
    var description = "Post Create";
    var keywords = "Racing, YourRacingExperience";
    Series.find({ show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
       if(err){
           console.log(err);
       } else {
          res.render("posts/post.ejs",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
       }
    });    
    
});

//This is the Post Create Page Form Route
//GET ROUTE
router.get("/post/new/:series", middleware.isLoggedIn, function(req, res){
    var sideBarVariable = 0;
    var tabName = " Post Create " + req.params.series;
    var description = "Post Create";
    var keywords = "Racing, YourRacingExperience";
    Series.find({ show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
        if(err){
            console.log(err);
        } else {
            Series.find({series_short: req.params.series, show: true},  function(err, seriesFound){
                if(err){
                    console.log(err);
                } else if (seriesFound.length === 0) {
                    res.redirect("/");    
                
                }else {
                    Seasons.find({series: req.params.series, show: true},  function(err, seasons){
                        if(err){
                            console.log(err);
                        } else {
                            Races.find({series: req.params.series, show: true},null, {sort: {'race_order': -1}},  function(err, racesFound){
                                if(err){
                                    console.log(err);
                                } else {
                                    res.render("posts/new.ejs",{sideBarVariable: sideBarVariable, series: series, seriesFound: seriesFound, racesFound: racesFound, seasons: seasons, tabName: tabName, description: description, keywords: keywords});
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

    
//POST CREATE ROUTE
//CREATE ROUTE
router.post("/post", middleware.isLoggedIn, upload.single('image'), function(req, res){
   
    //var desc = req.body.description;
    var raceSelected = req.body.post.race;
    var splitString = raceSelected.split(" - ");
    req.body.post.race = splitString[1];
    req.body.post.year = splitString[0];
   
   
    req.body.post.description = req.sanitize(req.body.post.description);
    
    
    
    cloudinary.uploader.upload(req.file.path, function(result) {

        req.body.post.image = result.secure_url;
        req.body.post.image_id = result.public_id;
        
        req.body.post.author = {
        id: req.user._id,
        username: req.user.username
        }
        
        Posts.create(req.body.post, function(err, newlyCreated){
          if(err){
              req.flash("error", "Something went wrong! Sorry about that.");
              console.log(err);
          } else {
                req.flash("success", "Successfully made a post!");
              res.redirect("/post/"+newlyCreated._id); 
          }
        });
    
    
    });

   
});

//SHOW ROUTE
router.get("/post/:id", function(req, res){
   //Find the Post with the ID
     //Find the Post with the ID
    var sideBarVariable = 0;
    Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
       if(err){
           console.log(err);
       } else {
          Posts.findById(req.params.id, function(err, foundPost){
              if(err || !foundPost){
                  req.flash('error', 'Sorry, that Post does not exist!');
                  console.log(err);
                  return res.redirect("/");
              } else {
                 var tabName = foundPost.name + " | " + foundPost.series
                 var description = foundPost.name;
                 var keywords = "Racing, YourRacingExperience," + foundPost.name;
                res.render("posts/show", {post: foundPost, sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords});  
              }
           });
        }
    });  
});

//EDIT POST
router.get("/post/:id/edit",middleware.isLoggedIn, middleware.checkPostOwnerShip, function(req, res){
    var sideBarVariable = 0;
    var tabName =" Post Edit";
        var description = "Post Edit";
    var keywords = "Racing, YourRacingExperience";
    Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
        if(err){
            console.log(err);
        } else {
            var seriesForRaces = req.foundPost.series;
            Races.find({series: seriesForRaces, show: true}, null, {sort: {'race_order': -1}},   function(err, racesFound){
                if(err){
                    console.log(err);
                } else {
                    res.render("posts/edit", {post: req.foundPost, sideBarVariable: sideBarVariable, series: series, racesFound: racesFound, tabName: tabName, description: description, keywords: keywords});  
                }
            });   
        } 
    });   
});
      
                
            


//UPDATE POST

//UPDATE POST
router.put("/post/:id", middleware.checkPostOwnerShip, upload.single('image'), function(req, res){
    var raceSelected = req.body.post.race;
    var splitString = raceSelected.split(" - ");
    req.body.post.race = splitString[1];
    req.body.post.year = splitString[0];
    req.body.post.description = req.sanitize(req.body.post.description);

    if(req.file){
        cloudinary.uploader.upload(req.file.path, function(result) {
            req.body.post.image = result.secure_url;
            req.body.post.image_id = result.public_id;
            
                    
            Posts.findById(req.params.id, function(err, foundPost){
                if(err){
                    console.log(err);
                } else{
                   cloudinary.uploader.destroy(foundPost.image_id, function(result){
                        Posts.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost){
                            if(err){
                                req.flash("error", "Something went wrong!");
                                res.redirect("/");
                            } else {
                                req.flash("success", "Successfully editted a post!");
                                res.redirect("/post/"+req.params.id);
                            }
                        });
                    });
                    
                }
            }); 
                        
        }); 
    } else {
        Posts.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost){
            if(err){
                req.flash("error", "Something went wrong!");
                res.redirect("/");
            } else {
                req.flash("success", "Successfully editted a post!");
                res.redirect("/post/"+req.params.id);
            }
        });
        
    }
    
    

});


//DESTROY POST
router.delete("/post/:id", middleware.checkPostOwnerShip, function(req, res){
    Posts.findById(req.params.id, function(err, foundPost){
        if(err){
            console.log(err);
        } else{

            cloudinary.uploader.destroy(foundPost.image_id, function(result){
                Posts.findByIdAndRemove(req.params.id, function(err){
                    if(err){
                        res.redirect("/");
                    } else {
                        res.redirect("/");
                    }
                }); 
            });
        }
    });
});




module.exports = router;