var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "Superbike World Championship",
        series_short:"WSBK",
        reddit_subscribers: 1236,
        reddit_link: "https://www.reddit.com/r/WSBK/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "WSBK",
      season_order: 0,
      show: true
    },
    {
      season_year: "2007",
      series: "WSBK",
      season_order: 1,
      show: true
    },
    {
      season_year: "2008",
      series: "WSBK",
      season_order: 2,
      show: true
    },
    {
      season_year: "2009",
      series: "WSBK",
      season_order: 3,
      show: true
    },
    {
      season_year: "2010",
      series: "WSBK",
      season_order: 4,
      show: true
    },
    {
      season_year: "2011",
      series: "WSBK",
      season_order: 5,
      show: true
    },
    {
      season_year: "2012",
      series: "WSBK",
      season_order: 6,
      show: true
    },
    {
      season_year: "2013",
      series: "WSBK",
      season_order: 7,
      show: true
      
    },
    {
      season_year: "2014",
      series: "WSBK",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "WSBK",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "WSBK",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "WSBK",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018",
      series: "WSBK",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "WSBK",
        race_order: 0,
      show: true
    },
    
//2007 Race Season"
    {
        race_name: "Qatar - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 1,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 2,
      show: true
    },
    {
        race_name: "Australia - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 3,
        show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 4,
      show: true
    },
    {
        race_name: "Europe - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 5,
      show: true
    },
    {
        race_name: "Europe - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 6,
      show: true
    },
    {
        race_name: "Spain - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 7,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 8,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 9,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 10,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 11,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 12,
      show: true
    },
    {
        race_name: "Great Britain (Silverstone) - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 13,
      show: true
    },
    {
        race_name: "Great Britain (Silverstone) - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 14,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 15,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 16,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 17,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 18,
      show: true
    },
    {
        race_name: "Great Britain (Brands Hatch) - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 19,
      show: true
    },
    {
        race_name: "Great Britain (Brands Hatch) - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 20,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 21,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 22,
      show: true
    },
    {
        race_name: "Italy (Vallelunga) - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 23,
      show: true
    },
    {
        race_name: "Italy (Vallelunga) - Round 2",
        year: "2007",
        series: "WSBK",
        race_order: 24,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2007",
        series: "WSBK",
        race_order: 25,
      show: true
    },

//2008 WSBK Season   
    {
        race_name: "Qatar - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 27,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 28,
      show: true
    },
    {
        race_name: "Australia - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 29,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 30,
      show: true
    },
    {
        race_name: "Spain - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 31,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 32,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 33,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 34,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 35,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 36,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 37,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 38,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 39,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 40,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 41,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 42,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 43,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 44,
      show: true
    },
    {
        race_name: "Great Britain - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 45,
      show: true
    },
    {
        race_name: "Great Britain - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 46,
      show: true
    },
    {
        race_name: "Europe - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 47,
      show: true
    },
    {
        race_name: "Europe - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 48,
      show: true
    },
    {
        race_name: "Italy (Vallelunga) - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 49,
      show: true
    },
    {
        race_name: "Italy (Vallelunga) - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 50,
      show: true
    },    
    {
        race_name: "France - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 51,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 52,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2008",
        series: "WSBK",
        race_order: 53,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2008",
        series: "WSBK",
        race_order: 54,
      show: true
    },


//2009 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 55,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 56,
      show: true
    },
    {
        race_name: "Qatar - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 57,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 58,
      show: true
    },
    {
        race_name: "Spain - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 59,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 60,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 61,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 62,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 63,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 64,
      show: true
    },
    {
        race_name: "South Africa - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 65,
      show: true
    },
    {
        race_name: "South Africa - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 66,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 67,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 68,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 69,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 70,
      show: true
    },
    {
        race_name: "Great Britain - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 71,
      show: true
    },
   {
        race_name: "Great Britain - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 72,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 73,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 74,
      show: true
    },

    {
        race_name: "Germany - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 75,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 76,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 77,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 78,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 79,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 80,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2009",
        series: "WSBK",
        race_order: 81,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2009",
        series: "WSBK",
        race_order: 82,
      show: true
    },


//2010 WSBK Season

    {
        race_name: "Austalia - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 83,
      show: true
    },
    {
        race_name: "Austalia - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 84,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 85,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 86,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 87,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 88,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 89,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 90,
      show: true
    },  
   {
        race_name: "Italy (Monza) - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 91,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 92,
      show: true
    },
    {
        race_name: "South Africa - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 93,
      show: true
    },
    {
        race_name: "South Africa - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 94,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 95,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 96,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 97,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 98,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 99,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 100,
      show: true
    },
    {
        race_name: "Great Britain - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 101,
      show: true
    },
    {
        race_name: "Great Britain - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 102,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 103,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 104,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 105,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 106,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2010",
        series: "WSBK",
        race_order: 107,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2010",
        series: "WSBK",
        race_order: 108,
      show: true
    },

//2011 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 109,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 110,
      show: true
    },  
   {
        race_name: "Gread Britain - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 111,
      show: true
    },
    {
        race_name: "Gread Britain - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 112,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 113,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 114,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 115,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 116,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 117,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 118,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 119,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 120,
      show: true
    },
    {
        race_name: "Spain - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 121,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 122,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 123,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 124,
      show: true
    },
    {
        race_name: "Great Britain - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 125,
      show: true
    },
    {
        race_name: "Great Britain - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 126,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 127,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 128,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 129,
      show: true
    },        
   {
        race_name: "Italy (Imola) - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 130,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 131,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 132,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2011",
        series: "WSBK",
        race_order: 133,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2011",
        series: "WSBK",
        race_order: 134,
      show: true
    },


//2012 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 135,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 136,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 137,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 138,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 139,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 140,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 141,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 142,
      show: true
    },
    {
        race_name: "United Kingdom (Donington) - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 143,
      show: true
    },
    {
        race_name: "United Kingdom (Donington) - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 144,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 145,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 146,
      show: true
    },
    {
        race_name: "San Marino - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 147,
      show: true
    },
    {
        race_name: "San Marino - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 148,
      show: true
    },        
   {
        race_name: "Spain - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 149,
      show: true
    },
    {
        race_name: "Spain - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 150,
      show: true
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 151,
      show: true
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 152,
      show: true
    },
    {
        race_name: "United Kingdom (Silverstone) - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 153,
      show: true
    },
    {
        race_name: "United Kingdom (Silverstone) - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 154,
      show: true
    },
    {
        race_name: "Russia - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 155,
      show: true
    },
    {
        race_name: "Russia - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 156,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 157,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 158,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 159,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 160,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2012",
        series: "WSBK",
        race_order: 161,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2012",
        series: "WSBK",
        race_order: 162,
      show: true
    },


//2013 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 163,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 164,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 165,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 166,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 167,
      show: true
    },            
   {
        race_name: "Netherlands - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 168,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 169,
      show: true
    },
    {
        race_name: "Italy (Monza) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 170,
      show: true
    },
    {
        race_name: "United Kingdom (Donington) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 171,
      show: true
    },
    {
        race_name: "United Kingdom (Donington) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 172,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 173,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 174,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 175,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 176,
      show: true
    },
    {
        race_name: "Russia - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 177,
      show: true
    },
    {
        race_name: "Russia - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 178,
      show: true
    },
    {
        race_name: "United Kingdom (Silverstone) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 179,
      show: true
    },
    {
        race_name: "United Kingdom (Silverstone) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 180,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 181,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 182,
      show: true
    },
    {
        race_name: "Turkey - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 183,
      show: true
    },
    {
        race_name: "Turkey - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 184,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 185,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 186,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 187,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 188,
      show: true
    },        
    {
        race_name: "Spain (Jerez) - Round 1",
        year: "2013",
        series: "WSBK",
        race_order: 189,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 2",
        year: "2013",
        series: "WSBK",
        race_order: 190,
      show: true
    },

//2014 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 191,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 192,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 193,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 194,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 195,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 196,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 197,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 198,
      show: true
    },
    {
        race_name: "United Kingdom - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 199,
      show: true
    },
    {
        race_name: "United Kingdom - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 200,
      show: true
    },
    {
        race_name: "Malaysia - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 201,
      show: true
    },
    {
        race_name: "Malaysia - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 202,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 203,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 204,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 205,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 206,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 207,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 208,
      show: true
    },    
    {
        race_name: "Spain (Jerez) - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 209,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 210,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 211,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 212,
      show: true
    },
    {
        race_name: "Qatar - Round 1",
        year: "2014",
        series: "WSBK",
        race_order: 213,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2014",
        series: "WSBK",
        race_order: 214,
      show: true
    },

//2015 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 215,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 216,
      show: true
    },
    {
        race_name: "Thailand - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 217,
      show: true
    },
    {
        race_name: "Thailand - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 218,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 219,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 220,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 221,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 222,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 223,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 224,
      show: true
    },
    {
        race_name: "United Kingdom - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 225,
      show: true
    },
    {
        race_name: "United Kingdom - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 226,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 227,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 228,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 229,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 230,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 231,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 232,
      show: true
    },   
    {
        race_name: "Malaysia - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 233,
      show: true
    },
    {
        race_name: "Malaysia - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 234,
      show: true
    }, 
    {
        race_name: "Spain (Jerez) - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 235,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 236,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 237,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 238,
      show: true
    },
    {
        race_name: "Qatar - Round 1",
        year: "2015",
        series: "WSBK",
        race_order: 239,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2015",
        series: "WSBK",
        race_order: 240,
      show: true
    },

//2016 WSBK Season    
    {
        race_name: "Australia - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 241,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 242,
      show: true
    },
    {
        race_name: "Thailand - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 243,
      show: true
    },
    {
        race_name: "Thailand - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 244,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 245,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 246,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 247,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 248,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 249,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 250,
      show: true
    },
        {
        race_name: "Malaysia - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 251,
      show: true
    },
    {
        race_name: "Malaysia - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 252,
      show: true
    }, 
    {
        race_name: "United Kingdom - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 253,
      show: true
    },
    {
        race_name: "United Kingdom - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 254,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 255,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 256,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 257,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 258,
      show: true
    }, 
    {
        race_name: "Germany - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 259,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 260,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 261,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 262,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 263,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 264,
      show: true
    },
    {
        race_name: "Qatar - Round 1",
        year: "2016",
        series: "WSBK",
        race_order: 265,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2016",
        series: "WSBK",
        race_order: 266,
      show: true
    },

//2017 Race Season FWSBK
 
    {
        race_name: "Australia - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 267,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 268,
      show: true
    },
    {
        race_name: "Thailand - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 269,
      show: true
    },
    {
        race_name: "Thailand - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 270,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 271,
      show: true
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 272,
      show: true
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 273,
      show: true
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 274,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 275,
      show: true
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 276,
      show: true
    },
    {
        race_name: "United Kingdom - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 277,
      show: true
    },
    {
        race_name: "United Kingdom - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 278,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 279,
      show: true
    },
    {
        race_name: "Italy (Misano) - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 280,
      show: true
    },
    {
        race_name: "United States - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 281,
      show: true
    },
    {
        race_name: "United States - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 282,
      show: true
    },
    {
        race_name: "Germany - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 283,
      show: true
    },
    {
        race_name: "Germany - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 284,
      show: true
    },
    {
        race_name: "Portugal - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 285,
      show: true
    },
    {
        race_name: "Portugal - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 286,
      show: true
    },
    {
        race_name: "France - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 287,
      show: true
    },
    {
        race_name: "France - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 288,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 289,
      show: true
    },
    {
        race_name: "Spain (Jerez) - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 290,
      show: true
    },
    {
        race_name: "Qatar - Round 1",
        year: "2017",
        series: "WSBK",
        race_order: 291,
      show: true
    },
    {
        race_name: "Qatar - Round 2",
        year: "2017",
        series: "WSBK",
        race_order: 292,
      show: true
    },
    
//2018 Race Season WSBK
 
    {
        race_name: "Australia - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 293,
      show: true
    },
    {
        race_name: "Australia - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 294,
      show: true
    },
    {
        race_name: "Thailand - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 295
    },
    {
        race_name: "Thailand - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 296
    },
    {
        race_name: "Spain (Aragón) - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 297
    },
    {
        race_name: "Spain (Aragón) - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 298
    },
    {
        race_name: "Netherlands - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 299
    },
    {
        race_name: "Netherlands - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 300
    },
    {
        race_name: "Italy (Imola) - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 301
    },
    {
        race_name: "Italy (Imola) - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 302
    },
    {
        race_name: "United Kingdom - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 303
    },
    {
        race_name: "United Kingdom - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 304
    },
    {
        race_name: "Czech Republic - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 305
    },
    {
        race_name: "Czech Republic - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 306
    },
    {
        race_name: "United States - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 307
    },
    {
        race_name: "United States - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 308
    },
    {
        race_name: "Italy (Misano) - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 309
    },
    {
        race_name: "Italy (Misano) - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 310
    },
    {
        race_name: "Portugal - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 311
    },
    {
        race_name: "Portugal - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 312
    },
    {
        race_name: "France - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 313
    },
    {
        race_name: "France - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 314
    },
    {
        race_name: "Argentina - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 315
    },
    {
        race_name: "Argentina - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 316
    },
    {
        race_name: "Qatar - Round 1",
        year: "2018",
        series: "WSBK",
        race_order: 317
    },
    {
        race_name: "Qatar - Round 2",
        year: "2018",
        series: "WSBK",
        race_order: 318
    }
]





function seedWSBK(){
    
                    
                    
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

module.exports = seedWSBK;



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



