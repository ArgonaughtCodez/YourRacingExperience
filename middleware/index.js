//All the Middleware goes here
var middlewareObj = {};

var Posts           = require("../models/posts");

middlewareObj.checkPostOwnerShip = function(req, res, next){
    if(req.isAuthenticated()){
        Posts.findById(req.params.id,  function(err, foundPost){
            if(err || !foundPost){
                req.flash("error", "Post not found!");
                res.redirect("back");
            } else {
               if(foundPost.author.id.equals(req.user._id) || req.user.isAdmin){ 
                   req.foundPost = foundPost;
                    next();
               } else {
                    req.flash("error", "You do not have permissions to do that!");
                    res.redirect("back"); 
               }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
}



middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("/login");
    }
}

middlewareObj.isAdmin = function(req, res, next){
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next();
        }else{
            req.flash("error", "You need permissions to do that!");
            res.redirect("/");
        }
    } else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("/login");
    }
}

middlewareObj.isLoggedInBack = function(req, res, next){
    if(req.isAuthenticated()){
        req.flash("error", "You are already logged in.");
        res.redirect("/");
    } else {
        next();
    }
}


module.exports = middlewareObj;

