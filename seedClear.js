var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");





function seedClear(){
    // User.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("removed USers!");
   //Remove all SERIES
   Series.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Series!");
        //Remove all Seasons
        Seasons.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed Seasons!");
            //Remove all Races
            Races.remove({}, function(err) {
                if(err){
                    console.log(err);
                }
                console.log("removed Races!");
                //Remove all Posts
                // Posts.remove({}, function(err) {
                //     if(err){
                //         console.log(err);
                //     }
                //     console.log("removed Posts!");
                    
                   
                // //Remove all Posts Loop END v
                // });
            //Remove all Races Loop END v
            });
        //Remove all Seasons Loop END v
        });
    //Remove All Series Loop END v
    }); 
// //Remove All Users Loop END v
    // }); 
    
}

module.exports = seedClear;