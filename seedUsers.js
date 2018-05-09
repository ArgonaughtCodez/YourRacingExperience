var mongoose = require("mongoose");
var express = require("express");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");
var passport = require("passport");

var dataUsers = [
    {
    username: "Argonaught",
    password: "Argo2541",
    isAdmin: false,
    email: "dpc@takeoff-avationmp.co.za",
    },
    {
    username: "Admin",
    password: "Zulu2541",
    isAdmin: true,
    email: "dpc@eastcoastsa.net",
    },
]




function seedUsers(){
    
                    
                   
                    //Adding the F1 Seasons to the DB
                    for(var i = 0; i < dataUsers.length; i++){
                        
                        var newUser = new User({username: dataUsers[i].username, email: dataUsers[i].email, isAdmin: dataUsers[i].isAdmin});
                        console.log(newUser);
                        var password = dataUsers[i].password;
                        User.register(newUser, password, function(err, user){
                          if(err){
                              console.log(err);
                          }
                          passport.authenticate("local")( function(){
                              console.log("Added a User");
                          });
                      });
                    }
                    
                    
    
}

module.exports = seedUsers;



// //add a few Seasons
//                                     dataSeasons.forEach(function(seed){
//                                         Seasons.create(seed, function(err, Season){
//                                             if(err){
//                                                 console.log(err)
//                                             } else {
//                                                 series.seasons.push(Season._id);
//                                                 series.save();
//                                                 console.log("added a Season");
                                                
//                                                 //add a few Seasons
//                                                 dataRaces.forEach(function(seed){
//                                                     Races.create(seed, function(err, Race){
//                                                         if(err){
//                                                             console.log(err)
//                                                         } else {
//                                                             Season.race.push(Race._id);
//                                                             Season.save();
//                                                             console.log("added a Race");
                                                            
//                                                             //add a few Posts
//                                                             dataPosts.forEach(function(seed){
//                                                                 Posts.create(seed, function(err, Posts){
//                                                                     if(err){
//                                                                         console.log(err)
//                                                                     } else {
//                                                                         Race.post.push(Posts._id);
//                                                                         Race.save();
//                                                                         console.log("added a Post");
//                                                                     }
//                                                                 });
//                                                             });
//                                                         }
//                                                     });
//                                                 });
//                                             }
//                                         });
//                                     });



