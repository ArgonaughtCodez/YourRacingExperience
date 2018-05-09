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



// 1) Reddit Links 
router.get("/reddit", function(req, res){
  var sideBarVariable = 0;
  var tabName = "Motorsport Reddit Links";
  var description = "Motorsport Reddit Links";
  var keywords = "Racing, YourRacingExperience";
  Series.find({ show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    if(err){
      console.log("Reddit Route - NO Series!");
      console.log(err);
    } else {
      res.render("reddit",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
    }
  });
});

// 2) User Profile Page 
router.get("/user/:userName", function(req, res){
  var sideBarVariable = 0;
  var tabName = req.params.userName + "'s profile";
    var description = req.params.userName + "'s profile";
  var keywords = "Racing, YourRacingExperience";
  Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    if(err){
      console.log("User Profile Page - NO Series!");
      console.log(err);
    } else {
      User.find({username: req.params.userName}, function(err, foundUsername){
        if(err){
          console.log("User Profile Page - Error Finding User!");
          console.log(err);
        } else {
          if(foundUsername.length < 1){
            console.log("User Profile Page - NO User!");
            return res.redirect('/');
          } else {
            Posts.find().where("author.username").equals(req.params.userName).exec(function(err, posts){
              if(err){
                console.log("User Profile Page - NO Posts!");
                console.log(err);
              } else {
                for (var i = posts.length; i--;)
                {
                  var string = cloudinary.image(posts[i].image_id, {width: 500,  crop: "fill"},{quality: 100 });
                  var splitString = string.split("'");
                  var longest = splitString.sort(function (a, b) { return b.length - a.length; })[0];
                  posts[i].resizedImage = longest;
                }
                res.render("userProfile",{sideBarVariable: sideBarVariable, series: series, posts: posts, tabName: tabName, description: description, keywords: keywords}); 
              }
            });
          }
        }
      });  
    }
  });
});


// 3) Register Page
router.get("/register", middleware.isLoggedInBack, function(req, res){
  var sideBarVariable = 0;
  var tabName =" Register Page";
  var description = "Register Page";
  var keywords = "Racing, YourRacingExperience, Register Page";
  Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    if(err){
      console.log("Register Page - NO Series!");
      console.log(err);
    } else {
      res.render("register",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
    }
  });
});



// 4) Register POST
router.post("/register", middleware.isLoggedInBack,  function(req, res){
  User.find({username: req.body.username}, function(err, foundUsername){
    if(err){
      console.log("Register POST - Error Finding User with Username");
      console.log(err);
    } else {
      User.find({email: req.body.useremail}, function(err, foundUserEmail){
      if(err){
        console.log("Register POST - Error Finding User with Email");
        console.log(err); 
      } else {
      
        var usernameMessage = "";
        if(foundUsername.length > 0){
          usernameMessage = "The Username : " + foundUsername[0].username+ " is already taken.";
        }
        
        var useremailMessage = "";
        if(foundUserEmail.length > 0){
          useremailMessage = "The Email : " + foundUserEmail[0].email+ " is already registered.";
        }
        
        if(useremailMessage != "" || usernameMessage != ""){
          req.flash("errorUsername", usernameMessage);
          req.flash("errorEmail", useremailMessage);
          return res.redirect("register");
        } else {
          var newUser = new User({username: req.body.username, email: req.body.useremail});
          User.register(newUser, req.body.password, function(err, user){
            if(err){
              req.flash("error", err.message);
              return res.redirect("register");
            }
            passport.authenticate("local")(req, res, function(){
              req.flash("success", "Welcome to YourRacingExperience "+ user.username);
              return res.redirect("/"); 
            });
          });
        
        }
      }
      });
    }
  });
});


// 5) Show login Form
router.get("/login", middleware.isLoggedInBack, function(req, res){
  var sideBarVariable = 0;
  var tabName =" Login";
  var description = "Login";
  var keywords = "Racing, YourRacingExperience";
  Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    if(err){
      console.log("Show Login Form - No Series!");
      console.log(err);
    } else {
      res.render("login",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
    }
  });
});

// 6) Show User Edit Form
router.get("/userEdit", middleware.isLoggedIn, function(req, res){
  var sideBarVariable = 0;
  var tabName =" User Edit Page ";
  var description = "User Edit Page";
  var keywords = "Racing, YourRacingExperience";
  Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
  if(err){
    console.log("Show User Edit Form - No Series!");
    console.log(err);
  } else {
      User.findOne({username: res.locals.currentUser.username}, function(err, user){
        if(err){
          console.log("Show User Edit Form - Error Finding User!");
          console.log(err);
        } else {
          var userInfo = [];
          userInfo.username = user.username;
          userInfo.userEmail = user.email;
          res.render("userEdit",{sideBarVariable: sideBarVariable, series: series, userInfo: userInfo, tabName: tabName, description: description, keywords: keywords}); 
        }
      });
    }
  });
});


// 7) User Edit PUT 1 - Email Change
router.put("/userEdit1", function(req, res){

  User.findOne({ username: res.locals.currentUser.username }, function(err, user) {
  
    if(err){
      req.flash('error', 'We could not find that account.');
      return res.redirect('/userEdit');
    } else {
    
      User.find({ email: req.body.useremail}, function(err, userFound){
      
        if(err){
          req.flash("error", "Something went wrong!");
          res.redirect("/userEdit");
        } else {
        
          if(userFound.length > 0){
            req.flash("error", "That email is already registered!");
            res.redirect("/userEdit");
          } else {
            // Confirm that the Password the User inserted is correct 
            
            
            //Then update the Email address to the new one ONLY when the password has been confirmed
            User.findByIdAndUpdate(user._id, { $set: { email: req.body.useremail} }, function(err, updatedUser){
            
              if(err){
                req.flash("error", "Something went wrong!");
                res.redirect("/userEdit");
              } else {
              
                req.flash("success", "Successfully editted your Email!");
                res.redirect("/userEdit");
              }
            });
          }
        }
      });
    }
  });
});


// 8) User Edit PUT 2 - Password Change
router.put("/userEdit2", function(req, res){
  User.findOne({ username: res.locals.currentUser.username }, function(err, user) {
  
    if(err){
      req.flash('error', 'We could not find that account.');
      return res.redirect('/userEdit');
    } else {
    
      if(req.body.newPass === req.body.confirm_user_pass) {
        user.setPassword(req.body.newPass, function(err) {
        
          user.save(function(err) {
            if(err){
              req.flash("error", "Password has NOT been changed.");
              return res.redirect('/userEdit');
              
            } else {
              req.flash("success", "Password has been changed.");
              return res.redirect('/userEdit');
            }
          
          });
        })
      } else {
        req.flash("error", "Passwords do not match.");
        return res.redirect('/userEdit');
      };
    }
  });
});

// 9) Login - POST
router.post("/login", middleware.isLoggedInBack, passport.authenticate("local", 
  {
    successRedirect: "/", 
    failureRedirect: "/login"
  }), function(req, res){

});

// 10) Logout Route
router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "Successfully Logged Out!");
  res.redirect("/");
});



// 11) Forgot Password - SHOW
router.get("/forgot", middleware.isLoggedInBack, function(req, res){
  var sideBarVariable = 0;
  var tabName =  " Forgotten Password";
  var description ="Forgotten Password";
  var keywords = "Racing, YourRacingExperience";
  Series.find({show: true},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    if(err){
      console.log(err);
      
    } else {
      res.render("forgot",{sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords}); 
    }
  });
});


// 12) Forgot Password - POST
router.post('/forgot', middleware.isLoggedInBack, function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
      if (!user) {
      req.flash('errorEmail', 'No account with that email address exists.');
      return res.redirect('/forgot');
      }
      
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      
      user.save(function(err) {
      done(err, token, user);
      });
      });
    },
    
    function(token, user, done) {
      
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'argonaughtten@gmail.com',
          pass: process.env.GMAILPW
        }
        
      });
      
      var mailOptions = {
        to: user.email,
        from: 'argonaughtten@gmail.com',
        subject: 'YourRacingExperience: Password Reset',
        text:'Hi, '+ user.username +'\n\n' + 
        'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('errorEmail', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

// 13) Password Reset - SHOW
router.get('/reset/:token', function(req, res) {
  var sideBarVariable = 0;
  var tabName = " Password Reset";
  var description = "Password Reset";
  var keywords = "Racing, YourRacingExperience";
  Series.find({},null, {sort: {'reddit_subscribers': 1}},  function(err, series){
    
    if(err){
      console.log("Show Password Reset Form - No Series!");
      console.log(err);
      
    } else {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        
        if (!user) {
          req.flash('errorEmail', 'Password reset token is invalid or has expired.');
          return res.redirect('/forgot');
        }
        
        res.render('reset', {token: req.params.token, sideBarVariable: sideBarVariable, series: series, tabName: tabName, description: description, keywords: keywords});
      });
    }
    
  });
});


// 14) Password Reset - POST
router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        
        if (!user) {
          req.flash('errorEmail', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }
        
        if(req.body.password === req.body.confirm) {
          user.setPassword(req.body.password, function(err) {
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
          
          user.save(function(err) {
            
            req.logIn(user, function(err) {
            done(err, user);
            });
          });
          })
          
        } else {
          req.flash("errorEmail", "Passwords do not match.");
          return res.redirect('back');
        }
        
      });
    },
    
    function(user, done) {
      
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'argonaughtten',
          pass: process.env.GMAILPW
        }
      });
      
      var mailOptions = {
        to: user.email,
        from: 'learntocodeinfo@mail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
        'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});






module.exports = router;