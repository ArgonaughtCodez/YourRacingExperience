var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "Formula E",
        series_short:"FE",
        reddit_subscribers: 10476,
        reddit_link: "https://www.reddit.com/r/FormulaE/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "FE",
      season_order: 0,
      show: true
    },
    // {
    //   season_year: "2007",
    //   series: "F1",
    //   season_order: 1
    // },
    // {
    //   season_year: "2008",
    //   series: "F1",
    //   season_order: 2
    // },
    // {
    //   season_year: "2009",
    //   series: "F1",
    //   season_order: 3
    // },
    // {
    //   season_year: "2010",
    //   series: "F1",
    //   season_order: 4
    // },
    // {
    //   season_year: "2011",
    //   series: "F1",
    //   season_order: 5
    // },
    // {
    //   season_year: "2012",
    //   series: "F1",
    //   season_order: 6
    // },
    // {
    //   season_year: "2013",
    //   series: "F1",
    //   season_order: 7
      
    // },
    // {
    //   season_year: "2014",
    //   series: "F1",
    //   season_order: 8
    // },
    {
      season_year: "2014-15",
      series: "FE",
      season_order: 9,
      show: true
    },
    {
      season_year: "2015-16",
      series: "FE",
      season_order: 10,
      show: true
    },
    {
      season_year: "2016-17",
      series: "FE",
      season_order: 11,
      show: true
    },
    {
      season_year: "2017-18",
      series: "FE",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "FE",
        race_order: 0,
      show: true
    },

//2014-15 Season FE
    {
        race_name: " Beijing ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 1,
      show: true
    },
    {
        race_name: "Putrajaya ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 2,
      show: true
    },
    {
        race_name: "Punta del Este ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 3,
        show: true
    },
    {
        race_name: "Buenos Aires ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 4,
      show: true
    },
    {
        race_name: "Miami ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 5,
      show: true
    },
    {
        race_name: "Long Beach ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 6,
      show: true
    },
    {
        race_name: "Monaco ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 7,
      show: true
    },
    {
        race_name: "Berlin ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 8,
      show: true
    },
    {
        race_name: "Moscow ePrix",
        year: "2014-15",
        series: "FE",
        race_order: 9,
      show: true
    },
    {
        race_name: "London ePrix Race 1",
        year: "2014-15",
        series: "FE",
        race_order: 10,
      show: true
    },
    {
        race_name: "London ePrix Race 2",
        year: "2014-15",
        series: "FE",
        race_order: 11,
      show: true
    },

//2015-16 FE Season
    {
        race_name: "Beijing ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 12,
      show: true
    },
    {
        race_name: "Putrajaya ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 13,
      show: true
    },
    {
        race_name: "Punta del Este ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 14,
      show: true
    },
    {
        race_name: "Buenos Aires ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 15,
      show: true
    },
    {
        race_name: "Mexico City ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 16,
      show: true
    },
    {
        race_name: "Long Beach ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 17,
      show: true
    },
    {
        race_name: "Paris ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 18,
      show: true
    },
    {
        race_name: "Berlin ePrix",
        year: "2015-16",
        series: "FE",
        race_order: 19,
      show: true
    },
    {
        race_name: "London ePrix Race 1",
        year: "2015-16",
        series: "FE",
        race_order: 20,
      show: true
    },
    {
        race_name: "London ePrix Race 2",
        year: "2015-16",
        series: "FE",
        race_order: 21,
      show: true
    },
    
    

//2016-17 Season FE 
    {
        race_name: "Hong Kong ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 22,
      show: true
    },
    {
        race_name: "Marrakesh ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 23,
      show: true
    },
    {
        race_name: "Buenos Aires ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 24,
      show: true
    },
    {
        race_name: "Mexico City ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 25,
      show: true
    },
    {
        race_name: "Monaco ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 26,
      show: true
    },
    {
        race_name: "Paris ePrix",
        year: "2016-17",
        series: "FE",
        race_order: 27,
      show: true
    },
    {
        race_name: "Berlin ePrix Race 1",
        year: "2016-17",
        series: "FE",
        race_order: 28,
      show: true
    },
    {
        race_name: "Berlin ePrix Race 2",
        year: "2016-17",
        series: "FE",
        race_order: 29,
      show: true
    },
     {
        race_name: "New York City ePrix Race 1",
        year: "2016-17",
        series: "FE",
        race_order: 30,
      show: true
    },   
    {
        race_name: "New York City ePrix Race 2",
        year: "2016-17",
        series: "FE",
        race_order: 31,
      show: true
    }, 
     {
        race_name: "Montreal ePrix Race 1",
        year: "2016-17",
        series: "FE",
        race_order: 32,
      show: true
    },   
    {
        race_name: "Montreal ePrix Race 2",
        year: "2016-17",
        series: "FE",
        race_order: 33,
      show: true
    },
    
//2018 Race Season F1
 
    {
        race_name: "Hong Kong ePrix Race 1",
        year: "2017-18",
        series: "FE",
        race_order: 34,
      show: true
    },
    {
        race_name: "Hong Kong ePrix Race 2",
        year: "2017-18",
        series: "FE",
        race_order: 35,
      show: true
    },
    {
        race_name: "Marrakesh ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 36,
      show: true
    },
    {
        race_name: "Santiago ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 37,
      show: true
    },
     {
        race_name: "Mexico City ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 38,
      show: true
    },
    {
        race_name: "Punta del Este ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 39,
      show: true
    },
    {
        race_name: "Rome ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 40
    },
    {
        race_name: "Paris ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 41
    },
     {
        race_name: "Berlin ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 42
    },
    {
        race_name: "Zürich ePrix",
        year: "2017-18",
        series: "FE",
        race_order: 43
    },
    {
        race_name: "New York City ePrix Race 1",
        year: "2017-18",
        series: "FE",
        race_order: 44
    },
    {
        race_name: "New York City ePrix Race 2",
        year: "2017-18",
        series: "FE",
        race_order: 45
    },
    
]





function seedFE(){
    
                    
                    
                    //Adding the F1 Series to the DB
                    for(var i = 0; i < dataSeries.length; i++){
                        var seed = dataSeries[i];
                        Series.create(seed, function(err, series){
                                if(err){
                                    console.log(err)
                                } else {
                                    
                                    console.log("added a Series" );
                                }
                            });
                    }
                    
                    //Adding the F1 Seasons to the DB
                    for(var i = 0; i < dataSeasons.length; i++){
                        var seed = dataSeasons[i];
                        Seasons.create(seed, function(err, series){
                                if(err){
                                    console.log(err)
                                } else {
                                    
                                    console.log("added a Season");
                                }
                            });
                    }
                    
                    //Adding the F1 Seasons to the DB
                    for(var i = 0; i < dataRaces.length; i++){
                        var seed = dataRaces[i];
                        Races.create(seed, function(err, races){
                                if(err){
                                    console.log(err)
                                } else {
                                    
                                    console.log("added a Race");
                                }
                            });
                    }
                    
                    
    
}

module.exports = seedFE;



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



