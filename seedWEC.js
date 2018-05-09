var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "FIA World Endurance Championship",
        series_short:"WEC",
        reddit_subscribers: 16103,
        reddit_link: "https://www.reddit.com/r/wec/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "WEC",
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
    {
      season_year: "2010",
      series: "WEC",
      season_order: 4,
      show: true
    },
    {
      season_year: "2011",
      series: "WEC",
      season_order: 5,
      show: true
    },
    {
      season_year: "2012",
      series: "WEC",
      season_order: 6,
      show: true
    },
    {
      season_year: "2013",
      series: "WEC",
      season_order: 7,
      show: true
      
    },
    {
      season_year: "2014",
      series: "WEC",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "WEC",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "WEC",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "WEC",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018-19",
      series: "WEC",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "WEC",
        race_order: 0,
      show: true
    },


//2010 Race Season WEC
    {
        race_name: "1000 km of Silverstone",
        year: "2010",
        series: "WEC",
        race_order: 1,
      show: true
    },
    {
        race_name: "Petit Le Mans",
        year: "2010",
        series: "WEC",
        race_order: 2,
      show: true
    },
    {
        race_name: "1000 km of Zhuhai",
        year: "2010",
        series: "WEC",
        race_order: 3,
        show: true
    },

//2011 Race Season WEC
    {
        race_name: "12 Hours of Sebring",
        year: "2011",
        series: "WEC",
        race_order: 4,
      show: true
    },
    {
        race_name: "1000 km of Spa-Francorchamps",
        year: "2011",
        series: "WEC",
        race_order: 5,
      show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2011",
        series: "WEC",
        race_order: 6,
      show: true
    },
    {
        race_name: "6 Hours of Imola",
        year: "2011",
        series: "WEC",
        race_order: 7,
      show: true
    },
    {
        race_name: "6 Hours of Silverstone",
        year: "2011",
        series: "WEC",
        race_order: 8,
      show: true
    },
    {
        race_name: "Petit Le Mans",
        year: "2011",
        series: "WEC",
        race_order: 9,
      show: true
    },
    {
        race_name: "6 Hours of Zhuhai",
        year: "2011",
        series: "WEC",
        race_order: 10,
      show: true
    },

//2012 WEC Season
    {
        race_name: "12 Hours of Sebring",
        year: "2012",
        series: "WEC",
        race_order: 11,
      show: true
    },
    {
        race_name: "6 Heures de Spa-Francorchamps",
        year: "2012",
        series: "WEC",
        race_order: 12,
      show: true
    },
    {
        race_name: "24 Heures du Mans",
        year: "2012",
        series: "WEC",
        race_order: 13,
      show: true
    },
    {
        race_name: "6 Hours of Silverstone",
        year: "2012",
        series: "WEC",
        race_order: 14,
      show: true
    },
    {
        race_name: "6 Hours of São Paulo",
        year: "2012",
        series: "WEC",
        race_order: 15,
      show: true
    },
    {
        race_name: "6 Hours of Bahrain",
        year: "2012",
        series: "WEC",
        race_order: 16,
      show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2012",
        series: "WEC",
        race_order: 17,
      show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2012",
        series: "WEC",
        race_order: 18,
      show: true
    },

//2013 WEC Season    
    {
        race_name: "6 Hours of Silverstone",
        year: "2013",
        series: "WEC",
        race_order: 19,
      show: true
    },
    {
        race_name: "WEC 6 Heures de Spa-Francorchamps",
        year: "2013",
        series: "WEC",
        race_order: 20,
      show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2013",
        series: "WEC",
        race_order: 21,
      show: true
    },
    {
        race_name: "6 Hours of São Paulo",
        year: "2013",
        series: "WEC",
        race_order: 22,
      show: true
    },
    {
        race_name: "6 Hours of Circuit of the Americas",
        year: "2013",
        series: "WEC",
        race_order: 23,
      show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2013",
        series: "WEC",
        race_order: 24,
      show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2013",
        series: "WEC",
        race_order: 25,
      show: true
    },
    {
        race_name: "6 Hours of Bahrain",
        year: "2013",
        series: "WEC",
        race_order: 26,
      show: true
    },


//2014 WEC Season    
    {
        race_name: "6 Hours of Silverstone",
        year: "2014",
        series: "WEC",
        race_order: 27,
      show: true
    },
    {
        race_name: "WEC 6 Heures de Spa-Francorchamps",
        year: "2014",
        series: "WEC",
        race_order: 28,
      show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2014",
        series: "WEC",
        race_order: 29,
      show: true
    },
    {
        race_name: "6 Hours of Circuit of the Americas",
        year: "2014",
        series: "WEC",
        race_order: 30,
      show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2014",
        series: "WEC",
        race_order: 31,
      show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2014",
        series: "WEC",
        race_order: 32,
      show: true
    },
    {
        race_name: "6 Hours of Bahrain",
        year: "2014",
        series: "WEC",
        race_order: 33,
      show: true
    },
    {
        race_name: "6 Hours of São Paulo",
        year: "2014",
        series: "WEC",
        race_order: 34,
      show: true
    },


//2015 WEC Season
    {
        race_name: "6 Hours of Silverstone",
        year: "2015",
        series: "WEC",
        race_order: 35,
      show: true
    },
    {
        race_name: "WEC 6 Heures de Spa-Francorchamps",
        year: "2015",
        series: "WEC",
        race_order: 36,
      show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2015",
        series: "WEC",
        race_order: 37,
      show: true
    },
    {
        race_name: "6 Hours of Nürburgring",
        year: "2015",
        series: "WEC",
        race_order: 38,
      show: true
    },
    {
        race_name: "6 Hours of Circuit of the Americas",
        year: "2015",
        series: "WEC",
        race_order: 39,
      show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2015",
        series: "WEC",
        race_order: 40,
      show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2015",
        series: "WEC",
        race_order: 41,
      show: true
    },
    {
        race_name: "Bapco 6 Hours of Bahrain",
        year: "2015",
        series: "WEC",
        race_order: 42,
      show: true
    },

//2016 WEC Season    
    {
        race_name: "6 Hours of Silverstone",
        year: "2016",
        series: "WEC",
        race_order: 43,
      show: true
    },
    {
        race_name: "WEC 6 Hours of Spa-Francorchamps",
        year: "2016",
        series: "WEC",
        race_order: 44,
      show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2016",
        series: "WEC",
        race_order: 45,
      show: true
    },
    {
        race_name: "6 Hours of Nürburgring",
        year: "2016",
        series: "WEC",
        race_order: 46,
      show: true
    },
    {
        race_name: "6 Hours of Mexico",
        year: "2016",
        series: "WEC",
        race_order: 47,
      show: true
    },
    {
        race_name: "6 Hours of Circuit of the Americas",
        year: "2016",
        series: "WEC",
        race_order: 48,
      show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2016",
        series: "WEC",
        race_order: 49,
      show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2016",
        series: "WEC",
        race_order: 50,
      show: true
    },    
    {
        race_name: "6 Hours of Bahrain",
        year: "2016",
        series: "WEC",
        race_order: 51,
      show: true
    },    
    
    
//2017 Race Season WEC
    {
        race_name: "6 Hours of Silverstone",
        year: "2017",
        series: "WEC",
        race_order: 52,
        show: true
    },
    {
        race_name: "6 Hours of Spa-Francorchamps",
        year: "2017",
        series: "WEC",
        race_order: 53,
        show: true
    },
    {
        race_name: "24 Hours of Le Mans",
        year: "2017",
        series: "WEC",
        race_order: 54,
        show: true
    },
    {
        race_name: "6 Hours of Nürburgring",
        year: "2017",
        series: "WEC",
        race_order: 55,
        show: true
    },
    {
        race_name: "6 Hours of Mexico",
        year: "2017",
        series: "WEC",
        race_order: 56,
        show: true
    },
    {
        race_name: "6 Hours of Circuit of the Americas",
        year: "2017",
        series: "WEC",
        race_order: 57,
        show: true
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2017",
        series: "WEC",
        race_order: 58,
        show: true
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2017",
        series: "WEC",
        race_order: 59,
        show: true
    },
    {
        race_name: "6 Hours of Bahrain",
        year: "2017",
        series: "WEC",
        race_order: 60,
        show: true
    },

//2018 Race Season F1
 
    {
        race_name: "6 Hours of Spa-Francorchamps '18",
        year: "2018-19",
        series: "WEC",
        race_order: 61
    },
    {
        race_name: "24 Hours of Le Mans '18",
        year: "2018-19",
        series: "WEC",
        race_order: 62
    },
    {
        race_name: "6 Hours of Silverstone",
        year: "2018-19",
        series: "WEC",
        race_order: 63
    },
    {
        race_name: "6 Hours of Fuji",
        year: "2018-19",
        series: "WEC",
        race_order: 64
    },
    {
        race_name: "6 Hours of Shanghai",
        year: "2018-19",
        series: "WEC",
        race_order: 65
    },
    {
        race_name: "1,500 Miles of Sebring",
        year: "2018-19",
        series: "WEC",
        race_order: 66
    },
    {
        race_name: "6 Hours of Spa-Francorchamps '19",
        year: "2018-19",
        series: "WEC",
        race_order: 67
    },
    {
        race_name: "24 Hours of Le Mans '19",
        year: "2018-19",
        series: "WEC",
        race_order: 68
    }
]





function seedWEC(){
    
                    
                    
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

module.exports = seedWEC;



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



