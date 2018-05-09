var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "FIA World Rallycross Championship",
        series_short:"WRX",
        reddit_subscribers: 450,
        reddit_link: "https://www.reddit.com/r/FIAWorldRX/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "WRX",
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
    {
      season_year: "2014",
      series: "WRX",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "WRX",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "WRX",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "WRX",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018",
      series: "WRX",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "WRX",
        race_order: 0,
        show: true
    },
    

//2014 Race Season WRX
    {
        race_name: "World RX of Portugal",
        year: "2014",
        series: "WRX",
        race_order: 1,
      show: true
    },
    {
        race_name: "World RX of Great Britain",
        year: "2014",
        series: "WRX",
        race_order: 2,
      show: true
    },
    {
        race_name: "World RX of Norway",
        year: "2014",
        series: "WRX",
        race_order: 3,
        show: true
    },
    {
        race_name: "World RX of Finland",
        year: "2014",
        series: "WRX",
        race_order: 4,
      show: true
    },
    {
        race_name: "World RX of Sweden",
        year: "2014",
        series: "WRX",
        race_order: 5,
      show: true
    },
    {
        race_name: "World RX of Belgium",
        year: "2014",
        series: "WRX",
        race_order: 6,
      show: true
    },
    {
        race_name: "World RX of Canada",
        year: "2014",
        series: "WRX",
        race_order: 7,
      show: true
    },
    {
        race_name: "World RX of France",
        year: "2014",
        series: "WRX",
        race_order: 8,
      show: true
    },
    {
        race_name: "World RX of Germany",
        year: "2014",
        series: "WRX",
        race_order: 9,
      show: true
    },
    {
        race_name: "World RX of Italy",
        year: "2014",
        series: "WRX",
        race_order: 10,
      show: true
    },
    {
        race_name: "World RX of Turkey",
        year: "2014",
        series: "WRX",
        race_order: 11,
      show: true
    },
    {
        race_name: "World RX of Argentina",
        year: "2014",
        series: "WRX",
        race_order: 12,
      show: true
    },


//2015 WRX Season    
    {
        race_name: "World RX of Portugal",
        year: "2015",
        series: "WRX",
        race_order: 13,
      show: true
    },
    {
        race_name: "World RX of Hockenheim",
        year: "2015",
        series: "WRX",
        race_order: 14,
      show: true
    },
    {
        race_name: "World RX of Belgium",
        year: "2015",
        series: "WRX",
        race_order: 15,
      show: true
    },
    {
        race_name: "World RX of Great Britain",
        year: "2015",
        series: "WRX",
        race_order: 16,
      show: true
    },
    {
        race_name: "World RX of Germany",
        year: "2015",
        series: "WRX",
        race_order: 17,
      show: true
    },
    {
        race_name: "World RX of Sweden",
        year: "2015",
        series: "WRX",
        race_order: 18,
      show: true
    },
    {
        race_name: "World RX of Canada",
        year: "2015",
        series: "WRX",
        race_order: 19,
      show: true
    },
    {
        race_name: "World RX of Norway",
        year: "2015",
        series: "WRX",
        race_order: 20,
      show: true
    },
    {
        race_name: "World RX of France",
        year: "2015",
        series: "WRX",
        race_order: 21,
      show: true
    },
    {
        race_name: "World RX of Barcelona",
        year: "2015",
        series: "WRX",
        race_order: 22,
      show: true
    },
    {
        race_name: "World RX of Turkey",
        year: "2015",
        series: "WRX",
        race_order: 23,
      show: true
    },
    {
        race_name: "World RX of Italy",
        year: "2015",
        series: "WRX",
        race_order: 24,
      show: true
    },
    {
        race_name: "World RX of Argentina",
        year: "2015",
        series: "WRX",
        race_order: 25,
      show: true
    },


//2016 WRX Season
    {
        race_name: "World RX of Portugal",
        year: "2016",
        series: "WRX",
        race_order: 26,
      show: true
    },
    {
        race_name: "World RX of Hockenheim",
        year: "2016",
        series: "WRX",
        race_order: 27,
      show: true
    },
    {
        race_name: "World RX of Belgium",
        year: "2016",
        series: "WRX",
        race_order: 28,
      show: true
    },
    {
        race_name: "World RX of Great Britain",
        year: "2016",
        series: "WRX",
        race_order: 29,
      show: true
    },
    {
        race_name: "World RX of Norway",
        year: "2016",
        series: "WRX",
        race_order: 30,
      show: true
    },
    {
        race_name: "World RX of Sweden",
        year: "2016",
        series: "WRX",
        race_order: 31,
      show: true
    },
    {
        race_name: "World RX of Canada",
        year: "2016",
        series: "WRX",
        race_order: 32,
      show: true
    },
    {
        race_name: "World RX of France",
        year: "2016",
        series: "WRX",
        race_order: 33,
      show: true
    },
    {
        race_name: "World RX of Barcelona",
        year: "2016",
        series: "WRX",
        race_order: 34,
      show: true
    },
    {
        race_name: "World RX of Latvia",
        year: "2016",
        series: "WRX",
        race_order: 35,
      show: true
    },
    {
        race_name: "World RX of Germany",
        year: "2016",
        series: "WRX",
        race_order: 36,
      show: true
    },
    {
        race_name: "World RX of Argentina",
        year: "2016",
        series: "WRX",
        race_order: 37,
      show: true
    },
    

//2017 Race Season F1
{
        race_name: "World RX of Barcelona",
        year: "2017",
        series: "WRX",
        race_order: 59,
        show: true
    },
    {
        race_name: "World RX of Portugal",
        year: "2017",
        series: "WRX",
        race_order: 60,
        show: true
    },
    {
        race_name: "World RX of Hockenheim",
        year: "2017",
        series: "WRX",
        race_order: 61,
        show: true
    },
    {
        race_name: "World RX of Belgium",
        year: "2017",
        series: "WRX",
        race_order: 63,
        show: true
    }, 
    {
        race_name: "World RX of Great Britain",
        year: "2017",
        series: "WRX",
        race_order: 65,
        show: true
    },
    {
        race_name: "World RX of Norway",
        year: "2017",
        series: "WRX",
        race_order: 67,
        show: true
    },
    {
        race_name: "World RX of Sweden",
        year: "2017",
        series: "WRX",
        race_order: 69,
        show: true
    },
    {
        race_name: "World RX of Canada",
        year: "2017",
        series: "WRX",
        race_order: 71,
        show: true
    },
    {
        race_name: "World RX of France",
        year: "2017",
        series: "WRX",
        race_order: 73,
        show: true
    },
    {
        race_name: "World RX of Latvia",
        year: "2017",
        series: "WRX",
        race_order: 74,
        show: true
    },
    {
        race_name: "World RX of Germany",
        year: "2017",
        series: "WRX",
        race_order: 75,
        show: true
    },
    {
        race_name: "World RX of South Africa",
        year: "2017",
        series: "WRX",
        race_order: 77,
        show: true
    },
    
//2018 Race Season F1
    {
        race_name: "World RX of Barcelona",
        year: "2018",
        series: "WRX",
        race_order: 78
    },
    {
        race_name: "World RX of Portugal",
        year: "2018",
        series: "WRX",
        race_order: 79
    },
    {
        race_name: "World RX of Belgium",
        year: "2018",
        series: "WRX",
        race_order: 81
    },
    {
        race_name: "World RX of Great Britain",
        year: "2018",
        series: "WRX",
        race_order: 83
    }, 
    {
        race_name: "World RX of Norway",
        year: "2018",
        series: "WRX",
        race_order: 85
    },
    {
        race_name: "World RX of Sweden",
        year: "2018",
        series: "WRX",
        race_order: 87
    },
    {
        race_name: "World RX of Canada",
        year: "2018",
        series: "WRX",
        race_order: 89
    },
    {
        race_name: "World RX of France",
        year: "2018",
        series: "WRX",
        race_order: 91
    },
    {
        race_name: "World RX of Latvia",
        year: "2018",
        series: "WRX",
        race_order: 92
    },
    {
        race_name: "World RX of the United States",
        year: "2018",
        series: "WRX",
        race_order: 93
    },
    {
        race_name: "World RX of Germany",
        year: "2018",
        series: "WRX",
        race_order: 94
    },
    {
        race_name: "World RX of South Africa",
        year: "2018",
        series: "WRX",
        race_order: 96
    }
]





function seedWRX(){
    
                    
                    
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

module.exports = seedWRX;



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



