var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "NASCAR",
        series_short:"NASCAR",
        reddit_subscribers: 63957,
        reddit_link: "https://www.reddit.com/r/NASCAR/" ,
      show: true
        
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "NASCAR",
      season_order: 0,
      show: true
    },
    {
      season_year: "2007",
      series: "NASCAR",
      season_order: 1,
      show: true
    },
    {
      season_year: "2008",
      series: "NASCAR",
      season_order: 2,
      show: true
    },
    {
      season_year: "2009",
      series: "NASCAR",
      season_order: 3,
      show: true
    },
    {
      season_year: "2010",
      series: "NASCAR",
      season_order: 4,
      show: true
    },
    {
      season_year: "2011",
      series: "NASCAR",
      season_order: 5,
      show: true
    },
    {
      season_year: "2012",
      series: "NASCAR",
      season_order: 6,
      show: true
    },
    {
      season_year: "2013",
      series: "NASCAR",
      season_order: 7,
      show: true
      
    },
    {
      season_year: "2014",
      series: "NASCAR",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "NASCAR",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "NASCAR",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "NASCAR",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018",
      series: "NASCAR",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other NASCAR Race
    {
        race_name: "Other",
        year: "Other",
        series: "NASCAR",
        race_order: 0,
      show: true
    },

//2007 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2007",
        series: "NASCAR",
        race_order: 1,
        show: true
    },
    {
        race_name: "Auto Club 500",
        year: "2007",
        series: "NASCAR",
        race_order: 2,
        show: true
    },
    {
        race_name: "UAW-DaimlerChrysler 400",
        year: "2007",
        series: "NASCAR",
        race_order: 3,
        show: true
    },
    {
        race_name: "Kobalt Tools 500",
        year: "2007",
        series: "NASCAR",
        race_order: 4,
        show: true
    },
 {
        race_name: "Food City 500",
        year: "2007",
        series: "NASCAR",
        race_order: 5,
        show: true
    },
    {
        race_name: "Goody's Cool Orange 500",
        year: "2007",
        series: "NASCAR",
        race_order: 6,
        show: true
    },
    {
        race_name: "Samsung 500",
        year: "2007",
        series: "NASCAR",
        race_order: 7,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 500",
        year: "2007",
        series: "NASCAR",
        race_order: 8,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2007",
        series: "NASCAR",
        race_order: 9,
        show: true
    },
    {
        race_name: "Crown Royal Presents The Jim Stewart 400",
        year: "2007",
        series: "NASCAR",
        race_order: 10,
        show: true
    },
    {
        race_name: "Dodge Avenger 500",
        year: "2007",
        series: "NASCAR",
        race_order: 11,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2007",
        series: "NASCAR",
        race_order: 12,
        show: true
    },
    {
        race_name: "Autism Speaks 400 presented by Visa",
        year: "2007",
        series: "NASCAR",
        race_order: 13,
        show: true
    },
    {
        race_name: "Pocono 500",
        year: "2007",
        series: "NASCAR",
        race_order: 14,
        show: true
    },
    {
        race_name: "Citizens Bank 400",
        year: "2007",
        series: "NASCAR",
        race_order: 15,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2007",
        series: "NASCAR",
        race_order: 16,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 300",
        year: "2007",
        series: "NASCAR",
        race_order: 17,
        show: true
    },
    {
        race_name: "Pepsi 400",
        year: "2007",
        series: "NASCAR",
        race_order: 18,
        show: true
    },
    {
        race_name: "USG Sheetrock 400",
        year: "2007",
        series: "NASCAR",
        race_order: 19,
        show: true
    },
    {
        race_name: "Allstate 400 at the Brickyard",
        year: "2007",
        series: "NASCAR",
        race_order: 20,
        show: true
    },
    {
        race_name: "Pennsylvania 500",
        year: "2007",
        series: "NASCAR",
        race_order: 21,
        show: true
    },
    {
        race_name: "Centurion Boats at the Glen",
        year: "2007",
        series: "NASCAR",
        race_order: 22,
        show: true
    },
    {
        race_name: "3M Performance 400",
        year: "2007",
        series: "NASCAR",
        race_order: 23,
        show: true
    },
    {
        race_name: "Sharpie 500",
        year: "2007",
        series: "NASCAR",
        race_order: 24,
        show: true
    },
    {
        race_name: "Sharp AQUOS 500",
        year: "2007",
        series: "NASCAR",
        race_order: 25,
        show: true
    },
    {
        race_name: "Chevy Rock & Roll 400",
        year: "2007",
        series: "NASCAR",
        race_order: 26,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2007",
        series: "NASCAR",
        race_order: 27,
        show: true
    },
    {
        race_name: "Dodge Dealers 400",
        year: "2007",
        series: "NASCAR",
        race_order: 28,
        show: true
    },
    {
        race_name: "LifeLock 400",
        year: "2007",
        series: "NASCAR",
        race_order: 29,
        show: true
    },
    {
        race_name: "UAW-Ford 500",
        year: "2007",
        series: "NASCAR",
        race_order: 30,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2007",
        series: "NASCAR",
        race_order: 31,
        show: true
    },
    {
        race_name: "Subway 500",
        year: "2007",
        series: "NASCAR",
        race_order: 32,
        show: true
    },
    {
        race_name: "Pep Boys Auto 500",
        year: "2007",
        series: "NASCAR",
        race_order: 33,
        show: true
    },
    {
        race_name: "Dickies 500",
        year: "2007",
        series: "NASCAR",
        race_order: 34,
        show: true
    },
    {
        race_name: "Checker Auto Parts 500 presented by Pennzoil",
        year: "2007",
        series: "NASCAR",
        race_order: 35,
        show: true
    },
    {
        race_name: "Ford 400",
        year: "2007",
        series: "NASCAR",
        race_order: 36,
        show: true
    },


//2008 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2008",
        series: "NASCAR",
        race_order: 37,
        show: true
    },
    {
        race_name: "Auto Club 500",
        year: "2008",
        series: "NASCAR",
        race_order: 38,
        show: true
    },
    {
        race_name: "UAW-Dodge 400",
        year: "2008",
        series: "NASCAR",
        race_order: 39,
        show: true
    },
    {
        race_name: "Kobalt Tools 500",
        year: "2008",
        series: "NASCAR",
        race_order: 40,
        show: true
    },
 {
        race_name: "Food City 500",
        year: "2008",
        series: "NASCAR",
        race_order: 41,
        show: true
    },
    {
        race_name: "Goody's Cool Orange 500",
        year: "2008",
        series: "NASCAR",
        race_order: 42,
        show: true
    },
    {
        race_name: "Samsung 500",
        year: "2008",
        series: "NASCAR",
        race_order: 43,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 500",
        year: "2008",
        series: "NASCAR",
        race_order: 44,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2008",
        series: "NASCAR",
        race_order: 45,
        show: true
    },
    {
        race_name: "Crown Royal Presents The Dan Lowry 400",
        year: "2008",
        series: "NASCAR",
        race_order: 46,
        show: true
    },
    {
        race_name: "Dodge Challenger 500",
        year: "2008",
        series: "NASCAR",
        race_order: 47,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2008",
        series: "NASCAR",
        race_order: 48,
        show: true
    },
    {
        race_name: "Best Buy 400 benefiting Student Clubs for Autism Speaks",
        year: "2008",
        series: "NASCAR",
        race_order: 49,
        show: true
    },
    {
        race_name: "Pocono 500",
        year: "2008",
        series: "NASCAR",
        race_order: 50,
        show: true
    },
    {
        race_name: "Lifelock 400",
        year: "2008",
        series: "NASCAR",
        race_order: 51,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2008",
        series: "NASCAR",
        race_order: 52,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 301",
        year: "2008",
        series: "NASCAR",
        race_order: 53,
        show: true
    },
    {
        race_name: "Coke Zero 400",
        year: "2008",
        series: "NASCAR",
        race_order: 54,
        show: true
    },
    {
        race_name: "LifeLock.com 400",
        year: "2008",
        series: "NASCAR",
        race_order: 55,
        show: true
    },
    {
        race_name: "Allstate 400 at the Brickyard",
        year: "2008",
        series: "NASCAR",
        race_order: 56,
        show: true
    },
    {
        race_name: "Sunoco Red Cross Pennsylvania 500",
        year: "2008",
        series: "NASCAR",
        race_order: 57,
        show: true
    },
    {
        race_name: "Centurion Boats at the Glen",
        year: "2008",
        series: "NASCAR",
        race_order: 58,
        show: true
    },
    {
        race_name: "3M Performance 400",
        year: "2008",
        series: "NASCAR",
        race_order: 59,
        show: true
    },
    {
        race_name: "Sharpie 500",
        year: "2008",
        series: "NASCAR",
        race_order: 60,
        show: true
    },
    {
        race_name: "Pepsi 500",
        year: "2008",
        series: "NASCAR",
        race_order: 61,
        show: true
    },
    {
        race_name: "Chevy Rock & Roll 400",
        year: "2008",
        series: "NASCAR",
        race_order: 62,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2008",
        series: "NASCAR",
        race_order: 63,
        show: true
    },
    {
        race_name: "Camping World RV 400",
        year: "2008",
        series: "NASCAR",
        race_order: 64,
        show: true
    },
    {
        race_name: "Camping World RV 400 presented by Coleman",
        year: "2008",
        series: "NASCAR",
        race_order: 65,
        show: true
    },
    {
        race_name: "AMP Energy 500",
        year: "2008",
        series: "NASCAR",
        race_order: 66,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2008",
        series: "NASCAR",
        race_order: 67,
        show: true
    },
    {
        race_name: "TUMS QuikPak 500",
        year: "2008",
        series: "NASCAR",
        race_order: 68,
        show: true
    },
    {
        race_name: "Pep Boys Auto 500",
        year: "2008",
        series: "NASCAR",
        race_order: 69,
        show: true
    },
    {
        race_name: "Dickies 500",
        year: "2008",
        series: "NASCAR",
        race_order: 70,
        show: true
    },
    {
        race_name: "Checker O'Reilly Auto Parts 500",
        year: "2008",
        series: "NASCAR",
        race_order: 71,
        show: true
    },
    {
        race_name: "Ford 400",
        year: "2008",
        series: "NASCAR",
        race_order: 72,
        show: true
    },


//2009 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2009",
        series: "NASCAR",
        race_order: 73,
        show: true
    },
    {
        race_name: "Auto Club 500",
        year: "2009",
        series: "NASCAR",
        race_order: 74,
        show: true
    },
    {
        race_name: "Shelby 427",
        year: "2009",
        series: "NASCAR",
        race_order: 75,
        show: true
    },
    {
        race_name: "Kobalt Tools 500",
        year: "2009",
        series: "NASCAR",
        race_order: 76,
        show: true
    },
 {
        race_name: "Food City 500",
        year: "2009",
        series: "NASCAR",
        race_order: 77,
        show: true
    },
    {
        race_name: "Goody's Fast Relief 500",
        year: "2009",
        series: "NASCAR",
        race_order: 78,
        show: true
    },
    {
        race_name: "Samsung 500",
        year: "2009",
        series: "NASCAR",
        race_order: 79,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 500",
        year: "2009",
        series: "NASCAR",
        race_order: 80,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2009",
        series: "NASCAR",
        race_order: 81,
        show: true
    },
    {
        race_name: "Crown Royal Presents The Russell Friedman 400",
        year: "2009",
        series: "NASCAR",
        race_order: 82,
        show: true
    },
    {
        race_name: "Southern 500 presented by GoDaddy.com",
        year: "2009",
        series: "NASCAR",
        race_order: 83,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2009",
        series: "NASCAR",
        race_order: 84,
        show: true
    },
    {
        race_name: "Autism Speaks 400 presented by Heluva Good! Cheese",
        year: "2009",
        series: "NASCAR",
        race_order: 85,
        show: true
    },
    {
        race_name: "Pocono 500",
        year: "2009",
        series: "NASCAR",
        race_order: 86,
        show: true
    },
    {
        race_name: "Lifelock 400",
        year: "2009",
        series: "NASCAR",
        race_order: 87,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2009",
        series: "NASCAR",
        race_order: 88,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 301",
        year: "2009",
        series: "NASCAR",
        race_order: 89,
        show: true
    },
    {
        race_name: "Coke Zero 400",
        year: "2009",
        series: "NASCAR",
        race_order: 90,
        show: true
    },
    {
        race_name: "LifeLock.com 400",
        year: "2009",
        series: "NASCAR",
        race_order: 91,
        show: true
    },
    {
        race_name: "Allstate 400 at the Brickyard",
        year: "2009",
        series: "NASCAR",
        race_order: 92,
        show: true
    },
    {
        race_name: "Sunoco Red Cross Pennsylvania 500",
        year: "2009",
        series: "NASCAR",
        race_order: 93,
        show: true
    },
    {
        race_name: "Heluva Good! Sour Cream Dips at The Glen",
        year: "2009",
        series: "NASCAR",
        race_order: 94,
        show: true
    },
    {
        race_name: "CARFAX 400",
        year: "2009",
        series: "NASCAR",
        race_order: 95,
        show: true
    },
    {
        race_name: "Sharpie 500",
        year: "2009",
        series: "NASCAR",
        race_order: 96,
        show: true
    },
    {
        race_name: "Pep Boys Auto 500",
        year: "2009",
        series: "NASCAR",
        race_order: 97,
        show: true
    },
    {
        race_name: "Chevy Rock & Roll 400",
        year: "2009",
        series: "NASCAR",
        race_order: 98,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2009",
        series: "NASCAR",
        race_order: 99,
        show: true
    },
    {
        race_name: "AAA 400",
        year: "2009",
        series: "NASCAR",
        race_order: 100,
        show: true
    },
    {
        race_name: "Price Chopper 400",
        year: "2009",
        series: "NASCAR",
        race_order: 101,
        show: true
    },
    {
        race_name: "Pepsi 500",
        year: "2009",
        series: "NASCAR",
        race_order: 102,
        show: true
    },
    {
        race_name: "NASCAR Banking 500 only from Bank of America",
        year: "2009",
        series: "NASCAR",
        race_order: 103,
        show: true
    },
    {
        race_name: "TUMS Fast Relief 500",
        year: "2009",
        series: "NASCAR",
        race_order: 104,
        show: true
    },
    {
        race_name: "AMP Energy 500",
        year: "2009",
        series: "NASCAR",
        race_order: 105,
        show: true
    },
    {
        race_name: "Dickies 500",
        year: "2009",
        series: "NASCAR",
        race_order: 106,
        show: true
    },
    {
        race_name: "Checker O'Reilly Auto Parts 500",
        year: "2009",
        series: "NASCAR",
        race_order: 107,
        show: true
    },
    {
        race_name: "Ford 400",
        year: "2009",
        series: "NASCAR",
        race_order: 108,
        show: true
    },


//2010 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2010",
        series: "NASCAR",
        race_order: 109,
        show: true
    },
    {
        race_name: "Auto Club 500",
        year: "2010",
        series: "NASCAR",
        race_order: 110,
        show: true
    },
    {
        race_name: "Shelby American at Las Vegas",
        year: "2010",
        series: "NASCAR",
        race_order: 111,
        show: true
    },
    {
        race_name: "Kobalt Tools Atlanta 500",
        year: "2010",
        series: "NASCAR",
        race_order: 112,
        show: true
    },
 {
        race_name: "Food City 500",
        year: "2010",
        series: "NASCAR",
        race_order: 113,
        show: true
    },
    {
        race_name: "Goody's Fast Pain Relief 500",
        year: "2010",
        series: "NASCAR",
        race_order: 114,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 600",
        year: "2010",
        series: "NASCAR",
        race_order: 115,
        show: true
    },
    {
        race_name: "Samsung Mobile 500",
        year: "2010",
        series: "NASCAR",
        race_order: 116,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2010",
        series: "NASCAR",
        race_order: 117,
        show: true
    },
    {
        race_name: "Crown Royal Presents the Heath Calhoun 400",
        year: "2010",
        series: "NASCAR",
        race_order: 118,
        show: true
    },
    {
        race_name: "Showtime Southern 500",
        year: "2010",
        series: "NASCAR",
        race_order: 119,
        show: true
    },
    {
        race_name: "Autism Speaks 400",
        year: "2010",
        series: "NASCAR",
        race_order: 120,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2010",
        series: "NASCAR",
        race_order: 121,
        show: true
    },
    {
        race_name: "Gillette Fusion ProGlide 500",
        year: "2010",
        series: "NASCAR",
        race_order: 122,
        show: true
    },
    {
        race_name: "Heluva Good! Sour Cream Dips 400",
        year: "2010",
        series: "NASCAR",
        race_order: 123,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2010",
        series: "NASCAR",
        race_order: 124,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 301",
        year: "2010",
        series: "NASCAR",
        race_order: 125,
        show: true
    },
    {
        race_name: "Coke Zero 400",
        year: "2010",
        series: "NASCAR",
        race_order: 126,
        show: true
    },
    {
        race_name: "LifeLock.com 400",
        year: "2010",
        series: "NASCAR",
        race_order: 127,
        show: true
    },
    {
        race_name: "Brickyard 400",
        year: "2010",
        series: "NASCAR",
        race_order: 128,
        show: true
    },
    {
        race_name: "Sunoco Red Cross Pennsylvania 500",
        year: "2010",
        series: "NASCAR",
        race_order: 129,
        show: true
    },
    {
        race_name: "Heluva Good! Sour Cream Dips at The Glen",
        year: "2010",
        series: "NASCAR",
        race_order: 130,
        show: true
    },
    {
        race_name: "Carfax 400",
        year: "2010",
        series: "NASCAR",
        race_order: 131,
        show: true
    },
    {
        race_name: "Irwin Tools Night Race",
        year: "2010",
        series: "NASCAR",
        race_order: 132,
        show: true
    },
    {
        race_name: "Emory Healthcare 500",
        year: "2010",
        series: "NASCAR",
        race_order: 133,
        show: true
    },
    {
        race_name: "Air Guard 400",
        year: "2010",
        series: "NASCAR",
        race_order: 134,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2010",
        series: "NASCAR",
        race_order: 135,
        show: true
    },
    {
        race_name: "AAA 400",
        year: "2010",
        series: "NASCAR",
        race_order: 136,
        show: true
    },
    {
        race_name: "Price Chopper 400",
        year: "2010",
        series: "NASCAR",
        race_order: 137,
        show: true
    },
    {
        race_name: "Pepsi Max 400",
        year: "2010",
        series: "NASCAR",
        race_order: 138,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2010",
        series: "NASCAR",
        race_order: 139,
        show: true
    },
    {
        race_name: "TUMS Fast Relief 500",
        year: "2010",
        series: "NASCAR",
        race_order: 140,
        show: true
    },
    {
        race_name: "AMP Energy Juice 500",
        year: "2010",
        series: "NASCAR",
        race_order: 141,
        show: true
    },
    {
        race_name: "AAA Texas 500",
        year: "2010",
        series: "NASCAR",
        race_order: 142,
        show: true
    },
    {
        race_name: "Kobalt Tools 500",
        year: "2010",
        series: "NASCAR",
        race_order: 143,
        show: true
    },
    {
        race_name: "Ford 400",
        year: "2010",
        series: "NASCAR",
        race_order: 144,
        show: true
    },


//2011 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2011",
        series: "NASCAR",
        race_order: 145,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 500",
        year: "2011",
        series: "NASCAR",
        race_order: 146,
        show: true
    },
    {
        race_name: "Kobalt Tools 400",
        year: "2011",
        series: "NASCAR",
        race_order: 147,
        show: true
    },
    {
        race_name: "Jeff Byrd 500 presented by Food City",
        year: "2011",
        series: "NASCAR",
        race_order: 148,
        show: true
    },
 {
        race_name: "Auto Club 400",
        year: "2011",
        series: "NASCAR",
        race_order: 149,
        show: true
    },
    {
        race_name: "Goody's Fast Relief 500",
        year: "2011",
        series: "NASCAR",
        race_order: 150,
        show: true
    },
    {
        race_name: "Samsung Mobile 500",
        year: "2011",
        series: "NASCAR",
        race_order: 151,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2011",
        series: "NASCAR",
        race_order: 152,
        show: true
    },
    {
        race_name: "Crown Royal Presents the Matthew and Daniel Hansen 400",
        year: "2011",
        series: "NASCAR",
        race_order: 153,
        show: true
    },
    {
        race_name: "Showtime Southern 500",
        year: "2011",
        series: "NASCAR",
        race_order: 154,
        show: true
    },
    {
        race_name: "FedEx 400 benefiting Autism Speaks",
        year: "2011",
        series: "NASCAR",
        race_order: 155,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2011",
        series: "NASCAR",
        race_order: 156,
        show: true
    },
    {
        race_name: "STP 400",
        year: "2011",
        series: "NASCAR",
        race_order: 157,
        show: true
    },
    {
        race_name: "5-hour Energy 500",
        year: "2011",
        series: "NASCAR",
        race_order: 158,
        show: true
    },
    {
        race_name: "Heluva Good! Sour Cream Dips 400",
        year: "2011",
        series: "NASCAR",
        race_order: 159,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2011",
        series: "NASCAR",
        race_order: 160,
        show: true
    },
    {
        race_name: "Coke Zero 400 powered by Coca-Cola",
        year: "2011",
        series: "NASCAR",
        race_order: 161,
        show: true
    },
    {
        race_name: "Quaker State 400",
        year: "2011",
        series: "NASCAR",
        race_order: 162,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 301",
        year: "2011",
        series: "NASCAR",
        race_order: 163,
        show: true
    },
    {
        race_name: "Brickyard 400 presented by Big Machine Records.com",
        year: "2011",
        series: "NASCAR",
        race_order: 164,
        show: true
    },
    {
        race_name: "Good Sam RV Insurance 500",
        year: "2011",
        series: "NASCAR",
        race_order: 165,
        show: true
    },
    {
        race_name: "Heluva Good! Sour Cream Dips at The Glen",
        year: "2011",
        series: "NASCAR",
        race_order: 166,
        show: true
    },
    {
        race_name: "Pure Michigan 400",
        year: "2011",
        series: "NASCAR",
        race_order: 167,
        show: true
    },
    {
        race_name: "Irwin Tools Night Race",
        year: "2011",
        series: "NASCAR",
        race_order: 168,
        show: true
    },
    {
        race_name: "AdvoCare 500",
        year: "2011",
        series: "NASCAR",
        race_order: 169,
        show: true
    },
    {
        race_name: "Wonderful Pistachios 400",
        year: "2011",
        series: "NASCAR",
        race_order: 170,
        show: true
    },
    {
        race_name: "GEICO 400",
        year: "2011",
        series: "NASCAR",
        race_order: 171,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2011",
        series: "NASCAR",
        race_order: 172,
        show: true
    },
    {
        race_name: "AAA 400",
        year: "2011",
        series: "NASCAR",
        race_order: 173,
        show: true
    },
    {
        race_name: "Hollywood Casino 400",
        year: "2011",
        series: "NASCAR",
        race_order: 174,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2011",
        series: "NASCAR",
        race_order: 175,
        show: true
    },
    {
        race_name: "Good Sam Club 500",
        year: "2011",
        series: "NASCAR",
        race_order: 176,
        show: true
    },
    {
        race_name: "Tums Fast Relief 500",
        year: "2011",
        series: "NASCAR",
        race_order: 177,
        show: true
    },
    {
        race_name: "AAA Texas 500",
        year: "2011",
        series: "NASCAR",
        race_order: 178,
        show: true
    },
    {
        race_name: "Kobalt Tools 500",
        year: "2011",
        series: "NASCAR",
        race_order: 179,
        show: true
    },
    {
        race_name: "Ford 400",
        year: "2011",
        series: "NASCAR",
        race_order: 180,
        show: true
    },    


//2012 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2012",
        series: "NASCAR",
        race_order: 181,
        show: true
    },
    {
        race_name: "Subway Fresh Fit 500",
        year: "2012",
        series: "NASCAR",
        race_order: 182,
        show: true
    },
    {
        race_name: "Kobalt Tools 400",
        year: "2012",
        series: "NASCAR",
        race_order: 183,
        show: true
    },
    {
        race_name: "Food City 500",
        year: "2012",
        series: "NASCAR",
        race_order: 184,
        show: true
    },
 {
        race_name: "Auto Club 400",
        year: "2012",
        series: "NASCAR",
        race_order: 185,
        show: true
    },
    {
        race_name: "Goody's Fast Relief 500",
        year: "2012",
        series: "NASCAR",
        race_order: 186,
        show: true
    },
    {
        race_name: "Samsung Mobile 500",
        year: "2012",
        series: "NASCAR",
        race_order: 187,
        show: true
    },
    {
        race_name: "STP 400",
        year: "2012",
        series: "NASCAR",
        race_order: 188,
        show: true
    },
    {
        race_name: "Capital City 400",
        year: "2012",
        series: "NASCAR",
        race_order: 189,
        show: true
    },
    {
        race_name: "Aaron's 499",
        year: "2012",
        series: "NASCAR",
        race_order: 190,
        show: true
    },
    {
        race_name: "Bojangles Southern 500",
        year: "2012",
        series: "NASCAR",
        race_order: 191,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2012",
        series: "NASCAR",
        race_order: 192,
        show: true
    },
    {
        race_name: "FedEx 400 benefiting Autism Speaks",
        year: "2012",
        series: "NASCAR",
        race_order: 193,
        show: true
    },
    {
        race_name: "Pocono 400 presented by #NASCAR",
        year: "2012",
        series: "NASCAR",
        race_order: 194,
        show: true
    },
    {
        race_name: "Quicken Loans 400",
        year: "2012",
        series: "NASCAR",
        race_order: 195,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2012",
        series: "NASCAR",
        race_order: 196,
        show: true
    },
    {
        race_name: "Quaker State 400",
        year: "2012",
        series: "NASCAR",
        race_order: 197,
        show: true
    },
    {
        race_name: "Coke Zero 400 powered by Coca-Cola",
        year: "2012",
        series: "NASCAR",
        race_order: 198,
        show: true
    },
    {
        race_name: "Lenox Industrial Tools 301",
        year: "2012",
        series: "NASCAR",
        race_order: 199,
        show: true
    },
    {
        race_name: "Crown Royal presents the Curtiss Shaver 400",
        year: "2012",
        series: "NASCAR",
        race_order: 200,
        show: true
    },
    {
        race_name: "Pennsylvania 400",
        year: "2012",
        series: "NASCAR",
        race_order: 201,
        show: true
    },
    {
        race_name: "Finger Lakes 355 at The Glen",
        year: "2012",
        series: "NASCAR",
        race_order: 202,
        show: true
    },
    {
        race_name: "Pure Michigan 400",
        year: "2012",
        series: "NASCAR",
        race_order: 203,
        show: true
    },
    {
        race_name: "Irwin Tools Night Race",
        year: "2012",
        series: "NASCAR",
        race_order: 204,
        show: true
    },
    {
        race_name: "AdvoCare 500",
        year: "2012",
        series: "NASCAR",
        race_order: 205,
        show: true
    },
    {
        race_name: "Federated Auto Parts 400",
        year: "2012",
        series: "NASCAR",
        race_order: 206,
        show: true
    },
    {
        race_name: "GEICO 400",
        year: "2012",
        series: "NASCAR",
        race_order: 207,
        show: true
    },
    {
        race_name: "Sylvania 300",
        year: "2012",
        series: "NASCAR",
        race_order: 208,
        show: true
    },
    {
        race_name: "AAA 400",
        year: "2012",
        series: "NASCAR",
        race_order: 209,
        show: true
    },
    {
        race_name: "Good Sam Roadside Assistance 500",
        year: "2012",
        series: "NASCAR",
        race_order: 210,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2012",
        series: "NASCAR",
        race_order: 211,
        show: true
    },
    {
        race_name: "Hollywood Casino 400",
        year: "2012",
        series: "NASCAR",
        race_order: 212,
        show: true
    },
    {
        race_name: "Tums Fast Relief 500",
        year: "2012",
        series: "NASCAR",
        race_order: 213,
        show: true
    },
    {
        race_name: "AAA Texas 500",
        year: "2012",
        series: "NASCAR",
        race_order: 214,
        show: true
    },
    {
        race_name: "AdvoCare 500",
        year: "2012",
        series: "NASCAR",
        race_order: 215,
        show: true
    },
    {
        race_name: "Ford EcoBoost 400",
        year: "2012",
        series: "NASCAR",
        race_order: 216,
        show: true
    },
    


//NASCAR 2013 Season
    
{
        
	race_name: "Daytona 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 217,
        
	show: true
    
},
{
        
	race_name: "Subway Fresh Fit 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 218,
        
	show: true
    
},
{
        
	race_name: "Kobalt Tools 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 219,
        
	show: true
    
},
{
        
	race_name: "Food City 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 220,
        
	show: true
    
},
{
        
	race_name: "Auto Club 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 221,
        
	show: true
    
},
{
        
	race_name: "STP Gas Booster 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 222,
        
	show: true
    
},
{
        
	race_name: "NRA 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 223,
        
	show: true
    
},
{
        
	race_name: "STP 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 224,
        
	show: true
    
},
{
        
	race_name: "Toyota Owners 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 225,
        
	show: true
    
},
{
        
	race_name: "Aaron's 499",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 226,
        
	show: true
    
},
{
        
	race_name: "Bojangles' Southern 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 227,
        
	show: true
    
},
{
        
	race_name: "Coca-Cola 600",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 228,
        
	show: true
    
},
{
        
	race_name: "FedEx 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 229,
        
	show: true
    
},
{
        
	race_name: 'Party in the Poconos 400',
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 230,
        
	show: true
    
},
{
        
	race_name: "Quicken Loans 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 231,
        
	show: true
    
},
{
        
	race_name: "Toyota/Save Mart 350",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 232,
        
	show: true
    
},
{
        
	race_name: "Quaker State 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 233,
        
	show: true
    
},
{
        
	race_name: "Coke Zero 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 234,
        
	show: true
    
},
{
        
	race_name: "Camping World RV Sales 301",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 235,
        
	show: true
    
},
{
        
	race_name: "Crown Royal 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 236,
        
	show: true
    
},
{
        
	race_name: "Gobowling.com 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 237,
        
	show: true
    
},
{
        
	race_name: "Cheez-It 355 at The Glen",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 238,
        
	show: true
    
},
{
        
	race_name: "Pure Michigan 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 239,
        
	show: true
    
},
{
        
	race_name: "Irwin Tools Night Race",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 240,
        
	show: true
    
},
{
        
	race_name: "AdvoCare 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 241,
        
	show: true
    
},
{
        
	race_name: "Federated Auto Parts 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 242,
        
	show: true
    
},
{
        
	race_name: "GEICO 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 243,
        
	show: true
    
},
{
        
	race_name: "Sylvania 300",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 244,
        
	show: true
    
},
{
        
	race_name: "AAA 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 245,
        
	show: true
    
},
{
        
	race_name: "Hollywood Casino 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 246,
        
	show: true
    
},
{
        
	race_name: "Bank of America 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 247,
        
	show: true
    
},
{
        
	race_name: "Camping World RV Sales 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 248,
        
	show: true
    
},
{
        
	race_name: "Goody's Headache Relief Shot 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 249,
        
	show: true
    
},
{
        
	race_name: "AAA Texas 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 250,
        
	show: true
    
},
{
        
	race_name: "AdvoCare 500",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 251,
        
	show: true
    
},
{
        
	race_name: "Ford EcoBoost 400",
        
	year: "2013",
        
	series: "NASCAR",
        
	race_order: 252,
        
	show: true
    
},


//NASCAR 2014 Season
    
{
        
	race_name: "Daytona 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 253,
        
	show: true
    
},
{
        
	race_name: "The Profit on CNBC 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 254,
        
	show: true
    
},
{
        
	race_name: "Kobalt 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 255,
        
	show: true
    
},
{
        
	race_name: "Food City 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 256,
        
	show: true
    
},
{
        
	race_name: "Auto Club 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 257,
        
	show: true
    
},
{
        
	race_name: "STP 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 258,
        
	show: true
    
},
{
        
	race_name: "Duck Commander 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 259,
        
	show: true
    
},
{
        
	race_name: "Bojangles' Southern 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 260,
        
	show: true
    
},
{
        
	race_name: "Toyota Owners 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 261,
        
	show: true
    
},
{
        
	race_name: "Aaron's 499",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 262,
        
	show: true
    
},
{
        
	race_name: "5-hour Energy 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 263,
        
	show: true
    
},
{
        
	race_name: "Coca-Cola 600",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 264,
        
	show: true
    
},
{
        
	race_name: "FedEx 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 265,
        
	show: true
    
},
{
        
	race_name: 'Pocono 400',
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 266,
        
	show: true
    
},
{
        
	race_name: "Quicken Loans 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 267,
        
	show: true
    
},
{
        
	race_name: "Toyota/Save Mart 350",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 268,
        
	show: true
    
},
{
        
	race_name: "Quaker State 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 269,
        
	show: true
    
},
{
        
	race_name: "Coke Zero 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 270,
        
	show: true
    
},
{
        
	race_name: "Camping World RV Sales 301",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 271,
        
	show: true
    
},
{
        
	race_name: "Crown Royal Presents The John Wayne Walding 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 272,
        
	show: true
    
},
{
        
	race_name: "Gobowling.com 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 273,
        
	show: true
    
},
{
        
	race_name: "Cheez-It 355 at The Glen",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 274,
        
	show: true
    
},
{
        
	race_name: "Pure Michigan 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 275,
        
	show: true
    
},
{
        
	race_name: "Irwin Tools Night Race",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 276,
        
	show: true
    
},
{
        
	race_name: "Oral-B USA 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 277,
        
	show: true
    
},
{
        
	race_name: "Federated Auto Parts 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 278,
        
	show: true
    
},
{
        
	race_name: "MyAFibStory.com 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 279,
        
	show: true
    
},
{
        
	race_name: "Sylvania 300",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 280,
        
	show: true
    
},
{
        
	race_name: "AAA 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 281,
        
	show: true
    
},
{
        
	race_name: "Hollywood Casino 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 282,
        
	show: true
    
},
{
        
	race_name: "Bank of America 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 283,
        
	show: true
    
},
{
        
	race_name: "GEICO 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 284,
        
	show: true
    
},
{
        
	race_name: "Goody's Headache Relief Shot 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 285,
        
	show: true
    
},
{
        
	race_name: "AAA Texas 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 286,
        
	show: true
    
},
{
        
	race_name: "Quicken Loans Race for Heroes 500",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 287,
        
	show: true
    
},
{
        
	race_name: "Ford EcoBoost 400",
        
	year: "2014",
        
	series: "NASCAR",
        
	race_order: 288,
        
	show: true
    
},
    
    
    
//NASCAR 2015 Season
    
{
        
	race_name: "Daytona 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 289,
        
	show: true
    
},
{
        
	race_name: "Folds of Honor QuikTrip 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 290,
        
	show: true
    
},
{
        
	race_name: "Kobalt 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 291,
        
	show: true
    
},
{
        
	race_name: "CampingWorld.com 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 292,
        
	show: true
    
},
{
        
	race_name: "Auto Club 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 293,
        
	show: true
    
},
{
        
	race_name: "STP 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 294,
        
	show: true
    
},
{
        
	race_name: "Duck Commander 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 295,
        
	show: true
    
},
{
        
	race_name: "Food City 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 296,
        
	show: true
    
},
{
        
	race_name: "Toyota Owners 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 297,
        
	show: true
    
},
{
        
	race_name: "GEICO 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 298,
        
	show: true
    
},
{
        
	race_name: "SpongeBob SquarePants 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 299,
        
	show: true
    
},
{
        
	race_name: "Coca-Cola 600",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 300,
        
	show: true
    
},
{
        
	race_name: "FedEx 400 benefiting Autism Speaks",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 301,
        
	show: true
    
},
{
        
	race_name: 'Axalta "We Paint Winners" 400',
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 302,
        
	show: true
    
},
{
        
	race_name: "Quicken Loans 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 303,
        
	show: true
    
},
{
        
	race_name: "Toyota/Save Mart 350",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 304,
        
	show: true
    
},
{
        
	race_name: "Coke Zero 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 305,
        
	show: true
    
},
{
        
	race_name: "Quaker State 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 306,
        
	show: true
    
},
{
        
	race_name: "5-hour Energy 301",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 307,
        
	show: true
    
},
{
        
	race_name: "Crown Royal Presents the Jeff Kyle 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 308,
        
	show: true
    
},
{
        
	race_name: "Windows 10 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 309,
        
	show: true
    
},
{
        
	race_name: "Cheez-It 355 at The Glen",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 310,
        
	show: true
    
},
{
        
	race_name: "Pure Michigan 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 311,
        
	show: true
    
},
{
        
	race_name: "Irwin Tools Night Race",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 312,
        
	show: true
    
},
{
        
	race_name: "Bojangles' Southern 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 313,
        
	show: true
    
},
{
        
	race_name: "Federated Auto Parts 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 314,
        
	show: true
    
},
{
        
	race_name: "myAFibRisk.com 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 315,
        
	show: true
    
},
{
        
	race_name: "Sylvania 300",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 316,
        
	show: true
    
},
{
        
	race_name: "AAA 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 317,
        
	show: true
    
},
{
        
	race_name: "Bank of America 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 318,
        
	show: true
    
},
{
        
	race_name: "Hollywood Casino 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 319,
        
	show: true
    
},
{
        
	race_name: "CampingWorld.com 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 320,
        
	show: true
    
},
{
        
	race_name: "Goody's Headache Relief Shot 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 321,
        
	show: true
    
},
{
        
	race_name: "AAA Texas 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 322,
        
	show: true
    
},
{
        
	race_name: "Quicken Loans Race for Heroes 500",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 323,
        
	show: true
    
},
{
        
	race_name: "Ford EcoBoost 400",
        
	year: "2015",
        
	series: "NASCAR",
        
	race_order: 324,
        
	show: true
    
},



    //NASCAR 2016 Season
    {
        race_name: "Daytona 500",
        year: "2016",
        series: "NASCAR",
        race_order: 325,
        show: true
    },  
    {
        race_name: "Folds of Honor QuikTrip 500",
        year: "2016",
        series: "NASCAR",
        race_order: 326,
        show: true
    },  
    {
        race_name: "Kobalt 400",
        year: "2016",
        series: "NASCAR",
        race_order: 327,
        show: true
    },  
    {
        race_name: "Good Sam 500",
        year: "2016",
        series: "NASCAR",
        race_order: 328,
        show: true
    },  
    {
        race_name: "Auto Club 400",
        year: "2016",
        series: "NASCAR",
        race_order: 329,
        show: true
    },  
    {
        race_name: "STP 500",
        year: "2016",
        series: "NASCAR",
        race_order: 330,
        show: true
    },  
    {
        race_name: "Duck Commander 500",
        year: "2016",
        series: "NASCAR",
        race_order: 331,
        show: true
    },  
    {
        race_name: "Food City 500",
        year: "2016",
        series: "NASCAR",
        race_order: 332,
        show: true
    }, 
    {
        race_name: "Toyota Owners 400",
        year: "2016",
        series: "NASCAR",
        race_order: 333,
        show: true
    },  
    {
        race_name: "GEICO 500",
        year: "2016",
        series: "NASCAR",
        race_order: 334,
        show: true
    },  
    {
        race_name: "Go Bowling 400",
        year: "2016",
        series: "NASCAR",
        race_order: 335,
        show: true
    },  
    {
        race_name: "AAA 400 Drive for Autism",
        year: "2016",
        series: "NASCAR",
        race_order: 336,
        show: true
    }, 
    {
        race_name: "Coca-Cola 600",
        year: "2016",
        series: "NASCAR",
        race_order: 337,
        show: true
    },  
    {
        race_name: 'Axalta "We Paint Winners" 400',
        year: "2016",
        series: "NASCAR",
        race_order: 338,
        show: true
    },  
    {
        race_name: "FireKeepers Casino 400",
        year: "2016",
        series: "NASCAR",
        race_order: 339,
        show: true
    },  
    {
        race_name: "Toyota/Save Mart 350",
        year: "2016",
        series: "NASCAR",
        race_order: 340,
        show: true
    },  
    {
        race_name: "Coke Zero 400",
        year: "2016",
        series: "NASCAR",
        race_order: 341,
        show: true
    },  
    {
        race_name: "Quaker State 400",
        year: "2016",
        series: "NASCAR",
        race_order: 342,
        show: true
    },  
    {
        race_name: "New Hampshire 301",
        year: "2016",
        series: "NASCAR",
        race_order: 343,
        show: true
    },  
    {
        race_name: "Crown Royal presents the Combat Wounded Coalition 400 at the Brickyard",
        year: "2016",
        series: "NASCAR",
        race_order: 344,
        show: true
    },  
    {
        race_name: "Pennsylvania 400",
        year: "2016",
        series: "NASCAR",
        race_order: 345,
        show: true
    },  
    {
        race_name: "Cheez-It 355 at The Glen",
        year: "2016",
        series: "NASCAR",
        race_order: 346,
        show: true
    },  
    {
        race_name: "Bass Pro Shops NRA Night Race",
        year: "2016",
        series: "NASCAR",
        race_order: 347,
        show: true
    },  
    {
        race_name: "Pure Michigan 400",
        year: "2016",
        series: "NASCAR",
        race_order: 348,
        show: true
    },  
    {
        race_name: "Bojangles' Southern 500",
        year: "2016",
        series: "NASCAR",
        race_order: 349,
        show: true
    },  
    {
        race_name: "Federated Auto Parts 400",
        year: "2016",
        series: "NASCAR",
        race_order: 350,
        show: true
    },  
    {
        race_name: "Teenage Mutant Ninja Turtles 400",
        year: "2016",
        series: "NASCAR",
        race_order: 351,
        show: true
    },  
    {
        race_name: "Bad Boy Off Road 300",
        year: "2016",
        series: "NASCAR",
        race_order: 352,
        show: true
    },  
    {
        race_name: "Citizen Soldier 400",
        year: "2016",
        series: "NASCAR",
        race_order: 353,
        show: true
    },  
    {
        race_name: "Bank of America 500",
        year: "2016",
        series: "NASCAR",
        race_order: 354,
        show: true
    },  
    {
        race_name: "Hollywood Casino 400",
        year: "2016",
        series: "NASCAR",
        race_order: 355,
        show: true
    }, 
    {
        race_name: "Hellmann's 500",
        year: "2016",
        series: "NASCAR",
        race_order: 356,
        show: true
    },  
    {
        race_name: "Goody's Fast Relief 500",
        year: "2016",
        series: "NASCAR",
        race_order: 357,
        show: true
    },  
    {
        race_name: "AAA Texas 500",
        year: "2016",
        series: "NASCAR",
        race_order: 358,
        show: true
    },  
    {
        race_name: "Can-Am 500",
        year: "2016",
        series: "NASCAR",
        race_order: 359,
        show: true
    },  
    {
        race_name: "Ford EcoBoost 400",
        year: "2016",
        series: "NASCAR",
        race_order: 360,
        show: true
    },  
    

    
    //2017 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2017",
        series: "NASCAR",
        race_order: 361,
        show: true
    },
    {
        race_name: "Folds of Honor QuikTrip 500",
        year: "2017",
        series: "NASCAR",
        race_order: 362,
        show: true
    },
    {
        race_name: "Kobalt 400",
        year: "2017",
        series: "NASCAR",
        race_order: 363,
        show: true
    },
    {
        race_name: "Camping World 500",
        year: "2017",
        series: "NASCAR",
        race_order: 364,
        show: true
    },
 {
        race_name: "Auto Club 400",
        year: "2017",
        series: "NASCAR",
        race_order: 365,
        show: true
    },
    {
        race_name: "STP 500",
        year: "2017",
        series: "NASCAR",
        race_order: 366,
        show: true
    },
    {
        race_name: "O'Reilly Auto Parts 500",
        year: "2017",
        series: "NASCAR",
        race_order: 367,
        show: true
    },
    {
        race_name: "Food City 500",
        year: "2017",
        series: "NASCAR",
        race_order: 368,
        show: true
    },
    {
        race_name: "Toyota Owners 400",
        year: "2017",
        series: "NASCAR",
        race_order: 369,
        show: true
    },
    {
        race_name: "GEICO 500",
        year: "2017",
        series: "NASCAR",
        race_order: 370,
        show: true
    },
    {
        race_name: "Go Bowling 400",
        year: "2017",
        series: "NASCAR",
        race_order: 371,
        show: true
    },
    {
        race_name: "Coca-Cola 600",
        year: "2017",
        series: "NASCAR",
        race_order: 372,
        show: true
    },
    {
        race_name: "AAA 400 Drive for Autism",
        year: "2017",
        series: "NASCAR",
        race_order: 373,
        show: true
    },
    {
        race_name: "Axalta presents the Pocono 400",
        year: "2017",
        series: "NASCAR",
        race_order: 374,
        show: true
    },
    {
        race_name: "FireKeepers Casino 400",
        year: "2017",
        series: "NASCAR",
        race_order: 375,
        show: true
    },
    {
        race_name: "Toyota/Save Mart 350",
        year: "2017",
        series: "NASCAR",
        race_order: 376,
        show: true
    },
    {
        race_name: "Coke Zero 400",
        year: "2017",
        series: "NASCAR",
        race_order: 377,
        show: true
    },
    {
        race_name: "Quaker State 400",
        year: "2017",
        series: "NASCAR",
        race_order: 378,
        show: true
    },
    {
        race_name: "Overton's 301",
        year: "2017",
        series: "NASCAR",
        race_order: 379,
        show: true
    },
    {
        race_name: "Brantley Gilbert Big Machine Brickyard 400",
        year: "2017",
        series: "NASCAR",
        race_order: 380,
        show: true
    },
    {
        race_name: "Overton's 400",
        year: "2017",
        series: "NASCAR",
        race_order: 381,
        show: true
    },
    {
        race_name: "I Love New York 355 at The Glen",
        year: "2017",
        series: "NASCAR",
        race_order: 382,
        show: true
    },
    {
        race_name: "Pure Michigan 400",
        year: "2017",
        series: "NASCAR",
        race_order: 383,
        show: true
    },
    {
        race_name: "Bass Pro Shops NRA Night Race",
        year: "2017",
        series: "NASCAR",
        race_order: 384,
        show: true
    },
    {
        race_name: "Bojangles' Southern 500",
        year: "2017",
        series: "NASCAR",
        race_order: 385,
        show: true
    },
    {
        race_name: "Federated Auto Parts 400",
        year: "2017",
        series: "NASCAR",
        race_order: 386,
        show: true
    },
    {
        race_name: "Tales of the Turtles 400",
        year: "2017",
        series: "NASCAR",
        race_order: 387,
        show: true
    },
    {
        race_name: "ISM Connect 300",
        year: "2017",
        series: "NASCAR",
        race_order: 388,
        show: true
    },
    {
        race_name: "Apache Warrior 400",
        year: "2017",
        series: "NASCAR",
        race_order: 389,
        show: true
    },
    {
        race_name: "Bank of America 500",
        year: "2017",
        series: "NASCAR",
        race_order: 390,
        show: true
    },
    {
        race_name: "Alabama 500",
        year: "2017",
        series: "NASCAR",
        race_order: 391,
        show: true
    },
    {
        race_name: "Hollywood Casino 400",
        year: "2017",
        series: "NASCAR",
        race_order: 392,
        show: true
    },
    {
        race_name: "First Data 500",
        year: "2017",
        series: "NASCAR",
        race_order: 393,
        show: true
    },
    {
        race_name: "AAA Texas 500",
        year: "2017",
        series: "NASCAR",
        race_order: 394,
        show: true
    },
    {
        race_name: "Can-Am 500",
        year: "2017",
        series: "NASCAR",
        race_order: 395,
        show: true
    },
    {
        race_name: "Ford EcoBoost 400",
        year: "2017",
        series: "NASCAR",
        race_order: 396,
        show: true
    },
    
//2018 Race Season NASCAR
    {
        race_name: "Daytona 500",
        year: "2018",
        series: "NASCAR",
        race_order: 397,
      show: true
    },
    {
        race_name: "Folds of Honor QuikTrip 500",
        year: "2018",
        series: "NASCAR",
        race_order: 398,
      show: true
    },
    {
        race_name: "Pennzoil 400",
        year: "2018",
        series: "NASCAR",
        race_order: 399,
      show: true
    },
        {
        race_name: "TicketGuardian 500",
        year: "2018",
        series: "NASCAR",
        race_order: 400,
      show: true
    },
    {
        race_name: "Auto Club 400",
        year: "2018",
        series: "NASCAR",
        race_order: 401,
      show: true
    },
    {
        race_name: "STP 500",
        year: "2018",
        series: "NASCAR",
        race_order: 402,
      show: true
    },
        {
        race_name: "O'Reilly Auto Parts 500",
        year: "2018",
        series: "NASCAR",
        race_order: 403
    },
    {
        race_name: "Food City 500",
        year: "2018",
        series: "NASCAR",
        race_order: 404
    },
    {
        race_name: "Toyota Owners 400",
        year: "2018",
        series: "NASCAR",
        race_order: 405
    },
        {
        race_name: "GEICO 500",
        year: "2018",
        series: "NASCAR",
        race_order: 406
    },
    {
        race_name: "AAA 400 Drive for Autism",
        year: "2018",
        series: "NASCAR",
        race_order: 407
    },
    {
        race_name: "Kansas 400",
        year: "2018",
        series: "NASCAR",
        race_order: 408
    },
        {
        race_name: "Coca-Cola 600",
        year: "2018",
        series: "NASCAR",
        race_order: 409
    },
    {
        race_name: "Pocono 400",
        year: "2018",
        series: "NASCAR",
        race_order: 410
    },
    {
        race_name: "FireKeepers Casino 400",
        year: "2018",
        series: "NASCAR",
        race_order: 411
    },
        {
        race_name: "Toyota/Save Mart 350",
        year: "2018",
        series: "NASCAR",
        race_order: 412
    },
    {
        race_name: "Overton's 400",
        year: "2018",
        series: "NASCAR",
        race_order: 413
    },
    {
        race_name: "Coke Zero 400 powered by Coca-Cola",
        year: "2018",
        series: "NASCAR",
        race_order: 414
    },
        {
        race_name: "Quaker State 400 presented by Advance Auto Parts",
        year: "2018",
        series: "NASCAR",
        race_order: 415
    },
    {
        race_name: "New Hampshire 301",
        year: "2018",
        series: "NASCAR",
        race_order: 416
    },
    {
        race_name: "Gander Outdoors 400",
        year: "2018",
        series: "NASCAR",
        race_order: 417
    },
        {
        race_name: "Go Bowling at The Glen",
        year: "2018",
        series: "NASCAR",
        race_order: 418
    },
    {
        race_name: "Pure Michigan 400",
        year: "2018",
        series: "NASCAR",
        race_order: 419
    },
    {
        race_name: "Bass Pro Shops NRA Night Race",
        year: "2018",
        series: "NASCAR",
        race_order: 420
    },
        {
        race_name: "Bojangles' Southern 500",
        year: "2018",
        series: "NASCAR",
        race_order: 421
    },
    {
        race_name: "Big Machine Vodka 400 at the Brickyard",
        year: "2018",
        series: "NASCAR",
        race_order: 422
    },
    {
        race_name: "South Point 400",
        year: "2018",
        series: "NASCAR",
        race_order: 423
    },
        {
        race_name: "Federated Auto Parts 400",
        year: "2018",
        series: "NASCAR",
        race_order: 424
    },
    {
        race_name: "Bank of America 500",
        year: "2018",
        series: "NASCAR",
        race_order: 425
    },
    {
        race_name: "Dover 400",
        year: "2018",
        series: "NASCAR",
        race_order: 426
    },
        {
        race_name: "Alabama 500",
        year: "2018",
        series: "NASCAR",
        race_order: 427
    },
    {
        race_name: "Hollywood Casino 400",
        year: "2018",
        series: "NASCAR",
        race_order: 428
    },
    {
        race_name: "First Data 500",
        year: "2018",
        series: "NASCAR",
        race_order: 429
    },
        {
        race_name: "AAA Texas 500",
        year: "2018",
        series: "NASCAR",
        race_order: 430
    },
    {
        race_name: "Can-Am 500",
        year: "2018",
        series: "NASCAR",
        race_order: 431
    },
    {
        race_name: "Ford EcoBoost 400",
        year: "2018",
        series: "NASCAR",
        race_order: 432
    }
]





function seedNASCAR(){
    
                    
                    
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

module.exports = seedNASCAR;



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



