var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "IndyCar",
        series_short:"IndyCar",
        reddit_subscribers: 11971,
        reddit_link: "https://www.reddit.com/r/INDYCAR/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "IndyCar",
      season_order: 0,
      show: true
    },
    {
      season_year: "2007",
      series: "IndyCar",
      season_order: 1,
      show: true
    },
    {
      season_year: "2008",
      series: "IndyCar",
      season_order: 2,
      show: true
    },
    {
      season_year: "2009",
      series: "IndyCar",
      season_order: 3,
      show: true
    },
    {
      season_year: "2010",
      series: "IndyCar",
      season_order: 4,
      show: true
    },
    {
      season_year: "2011",
      series: "IndyCar",
      season_order: 5,
      show: true
    },
    {
      season_year: "2012",
      series: "IndyCar",
      season_order: 6,
      show: true
    },
    {
      season_year: "2013",
      series: "IndyCar",
      season_order: 7,
      show: true
      
    },
    {
      season_year: "2014",
      series: "IndyCar",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "IndyCar",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "IndyCar",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "IndyCar",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018",
      series: "IndyCar",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "IndyCar",
        race_order: 0,
      show: true
    },
    
//2007 Race Season"
    {
        race_name: "XM Satellite Radio Indy 300",
        year: "2007",
        series: "IndyCar",
        race_order: 1,
      show: true
    },
    {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2007",
        series: "IndyCar",
        race_order: 2,
      show: true
    },
    {
        race_name: "Indy Japan 300",
        year: "2007",
        series: "IndyCar",
        race_order: 3,
        show: true
    },
    {
        race_name: "Kansas Lottery Indy 300",
        year: "2007",
        series: "IndyCar",
        race_order: 4,
      show: true
    },
    {
        race_name: "91st Indianapolis 500",
        year: "2007",
        series: "IndyCar",
        race_order: 5,
      show: true
    },
    {
        race_name: "ABC Supply Company A.J. Foyt 225",
        year: "2007",
        series: "IndyCar",
        race_order: 6,
      show: true
    },
    {
        race_name: "Bombardier Learjet 550",
        year: "2007",
        series: "IndyCar",
        race_order: 7,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250 presented by Ethanol",
        year: "2007",
        series: "IndyCar",
        race_order: 8,
      show: true
    },
    {
        race_name: "SunTrust Indy Challenge presented by XM Satellite Radio",
        year: "2007",
        series: "IndyCar",
        race_order: 9,
      show: true
    },
    {
        race_name: "Camping World Watkins Glen Grand Prix",
        year: "2007",
        series: "IndyCar",
        race_order: 10,
      show: true
    },
    {
        race_name: "Firestone Indy 200",
        year: "2007",
        series: "IndyCar",
        race_order: 11,
      show: true
    },
    {
        race_name: "The Honda 200 at Mid-Ohio presented by Westfield Insurance",
        year: "2007",
        series: "IndyCar",
        race_order: 12,
      show: true
    },
    {
        race_name: "Firestone Indy 400",
        year: "2007",
        series: "IndyCar",
        race_order: 13,
      show: true
    },
    {
        race_name: "Meijer Indy 300 presented by Coca-Cola and Edy's",
        year: "2007",
        series: "IndyCar",
        race_order: 14,
      show: true
    },
    {
        race_name: "Motorola Indy 300",
        year: "2007",
        series: "IndyCar",
        race_order: 15,
      show: true
    },
    {
        race_name: "Detroit Indy Grand Prix presented by Firestone",
        year: "2007",
        series: "IndyCar",
        race_order: 16,
      show: true
    },
    {
        race_name: "Peak Antifreeze Indy 300 presented by Mr. Clean",
        year: "2007",
        series: "IndyCar",
        race_order: 17,
      show: true
    },


//2008 IndyCar Season    
    {
        race_name: "XM Indy 300 at Homestead-Miami",
        year: "2008",
        series: "IndyCar",
        race_order: 18,
      show: true
    },
    {
        race_name: "Honda IndyCar Grand Prix at St. Petersburg",
        year: "2008",
        series: "IndyCar",
        race_order: 19,
      show: true
    },
    {
        race_name: "Indy Japan 300",
        year: "2008",
        series: "IndyCar",
        race_order: 20,
      show: true
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2008",
        series: "IndyCar",
        race_order: 21,
      show: true
    },
    {
        race_name: "RoadRunner Turbo Indy 300",
        year: "2008",
        series: "IndyCar",
        race_order: 22,
      show: true
    },
    {
        race_name: "92nd Indianapolis 500",
        year: "2008",
        series: "IndyCar",
        race_order: 23,
      show: true
    },
    {
        race_name: "ABC Supply Company A.J. Foyt 225",
        year: "2008",
        series: "IndyCar",
        race_order: 24,
      show: true
    },
    {
        race_name: "Bombardier Learjet IndyCar 550k at Texas",
        year: "2008",
        series: "IndyCar",
        race_order: 25,
      show: true
    },
    {
        race_name: "Ethanol IndyCar 250 at Iowa pres. by Midwest Corn Growers",
        year: "2008",
        series: "IndyCar",
        race_order: 27,
      show: true
    },
    {
        race_name: "SunTrust Indy Challenge",
        year: "2008",
        series: "IndyCar",
        race_order: 28,
      show: true
    },
    {
        race_name: "Camping World IndyCar Grand Prix at The Glen",
        year: "2008",
        series: "IndyCar",
        race_order: 29,
      show: true
    },
    {
        race_name: "Firestone IndyCar 200 at Nashville",
        year: "2008",
        series: "IndyCar",
        race_order: 30,
      show: true
    },
    {
        race_name: "Honda IndyCar Grand Prix at Mid-Ohio",
        year: "2008",
        series: "IndyCar",
        race_order: 31,
      show: true
    },
    {
        race_name: "Rexall Edmonton Indy",
        year: "2008",
        series: "IndyCar",
        race_order: 32,
      show: true
    },
    {
        race_name: "Meijer Indy 300",
        year: "2008",
        series: "IndyCar",
        race_order: 33,
      show: true
    },
    {
        race_name: "Peak Antifreeze & Motor Oil Indy Grand Prix of Sonoma County",
        year: "2008",
        series: "IndyCar",
        race_order: 34,
      show: true
    },
    {
        race_name: "Detroit Indy Grand Prix presented by Firestone",
        year: "2008",
        series: "IndyCar",
        race_order: 35,
      show: true
    },
    {
        race_name: "Peak Antifreeze & Motor Oil Indy 300",
        year: "2008",
        series: "IndyCar",
        race_order: 36,
      show: true
    },
    {
        race_name: "Nikon Indy 300",
        year: "2008",
        series: "IndyCar",
        race_order: 37,
      show: true
    },

//2009 IndyCar Season
    {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2009",
        series: "IndyCar",
        race_order: 38,
      show: true
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2009",
        series: "IndyCar",
        race_order: 39,
      show: true
    },
    {
        race_name: "RoadRunner Turbo Indy 300",
        year: "2009",
        series: "IndyCar",
        race_order: 40,
      show: true
    },
    {
        race_name: "93rd Indianapolis 500",
        year: "2009",
        series: "IndyCar",
        race_order: 41,
      show: true
    },
    {
        race_name: "ABC Supply Company A.J. Foyt 225",
        year: "2009",
        series: "IndyCar",
        race_order: 42,
      show: true
    },
    {
        race_name: "Bombardier Learjet 550",
        year: "2009",
        series: "IndyCar",
        race_order: 43,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250",
        year: "2009",
        series: "IndyCar",
        race_order: 44,
      show: true
    },
    {
        race_name: "SunTrust Indy Challenge",
        year: "2009",
        series: "IndyCar",
        race_order: 45,
      show: true
    },
    {
        race_name: "Camping World Grand Prix at The Glen",
        year: "2009",
        series: "IndyCar",
        race_order: 46,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2009",
        series: "IndyCar",
        race_order: 47,
      show: true
    },
    {
        race_name: "Rexall Edmonton Indy",
        year: "2009",
        series: "IndyCar",
        race_order: 48,
      show: true
    },
    {
        race_name: "Meijer Indy 300",
        year: "2009",
        series: "IndyCar",
        race_order: 49,
      show: true
    },
    {
        race_name: "Honda 200",
        year: "2009",
        series: "IndyCar",
        race_order: 50,
      show: true
    },    
    {
        race_name: "Indy Grand Prix of Sonoma",
        year: "2009",
        series: "IndyCar",
        race_order: 51,
      show: true
    },
    {
        race_name: "Peak Antifreeze & Motor Oil Indy 300",
        year: "2009",
        series: "IndyCar",
        race_order: 52,
      show: true
    },
    {
        race_name: "Indy Japan 300",
        year: "2009",
        series: "IndyCar",
        race_order: 53,
      show: true
    },
    {
        race_name: "Firestone Indy 300",
        year: "2009",
        series: "IndyCar",
        race_order: 54,
      show: true
    },


//2010 IndyCar Season    
    {
        race_name: "São Paulo Indy 300",
        year: "2010",
        series: "IndyCar",
        race_order: 55,
      show: true
    },
    {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2010",
        series: "IndyCar",
        race_order: 56,
      show: true
    },
    {
        race_name: "Indy Grand Prix of Alabama presented by Legacy Credit Union",
        year: "2010",
        series: "IndyCar",
        race_order: 57,
      show: true
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2010",
        series: "IndyCar",
        race_order: 58,
      show: true
    },
    {
        race_name: "RoadRunner Turbo Indy 300",
        year: "2010",
        series: "IndyCar",
        race_order: 59,
      show: true
    },
    {
        race_name: "94th Indianapolis 500",
        year: "2010",
        series: "IndyCar",
        race_order: 60,
      show: true
    },
    {
        race_name: "Firestone 550K",
        year: "2010",
        series: "IndyCar",
        race_order: 61,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250",
        year: "2010",
        series: "IndyCar",
        race_order: 62,
      show: true
    },
    {
        race_name: "Camping World Grand Prix at The Glen",
        year: "2010",
        series: "IndyCar",
        race_order: 63,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2010",
        series: "IndyCar",
        race_order: 64,
      show: true
    },
    {
        race_name: "Honda Indy Edmonton",
        year: "2010",
        series: "IndyCar",
        race_order: 65,
      show: true
    },
    {
        race_name: "Honda Indy 200 presented by Westfield Insurance",
        year: "2010",
        series: "IndyCar",
        race_order: 66,
      show: true
    },
    {
        race_name: "Indy Grand Prix of Sonoma",
        year: "2010",
        series: "IndyCar",
        race_order: 67,
      show: true
    },
    {
        race_name: "Peak Antifreeze and Motor Oil Indy 300",
        year: "2010",
        series: "IndyCar",
        race_order: 68,
      show: true
    },
    {
        race_name: "Kentucky Indy 300",
        year: "2010",
        series: "IndyCar",
        race_order: 69,
      show: true
    },
    {
        race_name: "Indy Japan 300",
        year: "2010",
        series: "IndyCar",
        race_order: 70,
      show: true
    },
    {
        race_name: "Cafés do Brasil Indy 300",
        year: "2010",
        series: "IndyCar",
        race_order: 71,
      show: true
    },


//2011 IndyCar Season
   {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2011",
        series: "IndyCar",
        race_order: 72,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama Presented by Legacy Credit Union",
        year: "2011",
        series: "IndyCar",
        race_order: 73,
      show: true
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2011",
        series: "IndyCar",
        race_order: 74,
      show: true
    },

    {
        race_name: "Itaipava São Paulo Indy 300 Presented by Nestlé",
        year: "2011",
        series: "IndyCar",
        race_order: 75,
      show: true
    },
    {
        race_name: "95th Indianapolis 500",
        year: "2011",
        series: "IndyCar",
        race_order: 76,
      show: true
    },
    {
        race_name: "Firestone Twin 275s",
        year: "2011",
        series: "IndyCar",
        race_order: 77,
      show: true
    },
    {
        race_name: "The Milwaukee 225",
        year: "2011",
        series: "IndyCar",
        race_order: 78,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250 Presented by Pioneer",
        year: "2011",
        series: "IndyCar",
        race_order: 79,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2011",
        series: "IndyCar",
        race_order: 80,
      show: true
    },
    {
        race_name: "Edmonton Indy",
        year: "2011",
        series: "IndyCar",
        race_order: 81,
      show: true
    },
    {
        race_name: "Honda 200 at Mid-Ohio Presented by Westfield Insurance",
        year: "2011",
        series: "IndyCar",
        race_order: 82,
      show: true
    },
    {
        race_name: "MoveThatBlock.com Indy 225",
        year: "2011",
        series: "IndyCar",
        race_order: 83,
      show: true
    },
    {
        race_name: "Indy Grand Prix of Sonoma",
        year: "2011",
        series: "IndyCar",
        race_order: 84,
      show: true
    },
    {
        race_name: "Grand Prix of Baltimore",
        year: "2011",
        series: "IndyCar",
        race_order: 85,
      show: true
    },
    {
        race_name: "Indy Japan: The Final",
        year: "2011",
        series: "IndyCar",
        race_order: 86,
      show: true
    },
    {
        race_name: "Kentucky Indy 300",
        year: "2011",
        series: "IndyCar",
        race_order: 87,
      show: true
    },
    {
        race_name: "IZOD IndyCar World Championship Presented by Honda",
        year: "2011",
        series: "IndyCar",
        race_order: 88,
      show: true
    },

//2012 IndyCar Season
    {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2012",
        series: "IndyCar",
        race_order: 89,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2012",
        series: "IndyCar",
        race_order: 90,
      show: true
    },  
   {
        race_name: "38th Toyota Grand Prix of Long Beach",
        year: "2012",
        series: "IndyCar",
        race_order: 91,
      show: true
    },
    {
        race_name: "Itaipava São Paulo Indy 300 presented by Nestlé",
        year: "2012",
        series: "IndyCar",
        race_order: 92,
      show: true
    },
    {
        race_name: "96th Indianapolis 500-Mile Race",
        year: "2012",
        series: "IndyCar",
        race_order: 93,
      show: true
    },
    {
        race_name: "Chevrolet Detroit Belle Isle Grand Prix presented by ShopAutoWeek.com",
        year: "2012",
        series: "IndyCar",
        race_order: 94,
      show: true
    },
    {
        race_name: "Firestone 550",
        year: "2012",
        series: "IndyCar",
        race_order: 95,
      show: true
    },
    {
        race_name: "Milwaukee IndyFest presented by XYQ",
        year: "2012",
        series: "IndyCar",
        race_order: 96,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250",
        year: "2012",
        series: "IndyCar",
        race_order: 97,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2012",
        series: "IndyCar",
        race_order: 98,
      show: true
    },
    {
        race_name: "Edmonton Indy",
        year: "2012",
        series: "IndyCar",
        race_order: 99,
      show: true
    },
    {
        race_name: "Honda Indy 200 at Mid-Ohio",
        year: "2012",
        series: "IndyCar",
        race_order: 100,
      show: true
    },
    {
        race_name: "GoPro Indy Grand Prix of Sonoma",
        year: "2012",
        series: "IndyCar",
        race_order: 101,
      show: true
    },
    {
        race_name: "Grand Prix of Baltimore presented by SRT",
        year: "2012",
        series: "IndyCar",
        race_order: 102,
      show: true
    },
    {
        race_name: "MAVTV 500 IndyCar World Championships",
        year: "2012",
        series: "IndyCar",
        race_order: 103,
      show: true
    },

//2013 IndyCar Season
    {
        race_name: "Honda Grand Prix of St. Petersburg",
        year: "2013",
        series: "IndyCar",
        race_order: 104,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2013",
        series: "IndyCar",
        race_order: 105,
      show: true
    },
    {
        race_name: "39th Toyota Grand Prix of Long Beach",
        year: "2013",
        series: "IndyCar",
        race_order: 106,
      show: true
    },
    {
        race_name: "Itaipava São Paulo Indy 300 presented by Nestlé",
        year: "2013",
        series: "IndyCar",
        race_order: 107,
      show: true
    },
    {
        race_name: "97th Indianapolis 500-Mile Race",
        year: "2013",
        series: "IndyCar",
        race_order: 108,
      show: true
    },  
    {
        race_name: "Chevrolet Indy Dual in Detroit presented by Quicken Loans - R1",
        year: "2013",
        series: "IndyCar",
        race_order: 109,
      show: true
    },
    {
        race_name: "Chevrolet Indy Dual in Detroit presented by Quicken Loans - R2",
        year: "2013",
        series: "IndyCar",
        race_order: 110,
      show: true
    },  
   {
        race_name: "Firestone 550",
        year: "2013",
        series: "IndyCar",
        race_order: 111,
      show: true
    },
    {
        race_name: "Milwaukee IndyFest",
        year: "2013",
        series: "IndyCar",
        race_order: 112,
      show: true
    },
    {
        race_name: "Iowa Corn Indy 250 presented by DeKalb",
        year: "2013",
        series: "IndyCar",
        race_order: 113,
      show: true
    },
    {
        race_name: "Pocono IndyCar 400 fueled by Sunoco",
        year: "2013",
        series: "IndyCar",
        race_order: 114,
      show: true
    },
    {
        race_name: "Honda Indy Toronto - R1",
        year: "2013",
        series: "IndyCar",
        race_order: 115,
      show: true
    },
    {
        race_name: "Honda Indy Toronto - R2",
        year: "2013",
        series: "IndyCar",
        race_order: 116,
      show: true
    },
    {
        race_name: "Honda Indy 200 at Mid-Ohio",
        year: "2013",
        series: "IndyCar",
        race_order: 117,
      show: true
    },
    {
        race_name: "GoPro Indy Grand Prix of Sonoma",
        year: "2013",
        series: "IndyCar",
        race_order: 118,
      show: true
    },
    {
        race_name: "Grand Prix of Baltimore",
        year: "2013",
        series: "IndyCar",
        race_order: 119,
      show: true
    },
    {
        race_name: "Shell and Pennzoil Grand Prix of Houston - R1",
        year: "2013",
        series: "IndyCar",
        race_order: 121,
      show: true
    },
    {
        race_name: "Shell and Pennzoil Grand Prix of Houston - R2",
        year: "2013",
        series: "IndyCar",
        race_order: 122,
      show: true
    },
    {
        race_name: "MAVTV 500 IndyCar World Championships",
        year: "2013",
        series: "IndyCar",
        race_order: 123,
      show: true
    },

//2014 IndyCar Season
    {
        race_name: "Firestone Grand Prix of St. Petersburg",
        year: "2014",
        series: "IndyCar",
        race_order: 124,
      show: true
    },
    {
        race_name: "40th Toyota Grand Prix of Long Beach",
        year: "2014",
        series: "IndyCar",
        race_order: 125,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2014",
        series: "IndyCar",
        race_order: 126,
      show: true
    },
    {
        race_name: "Grand Prix of Indianapolis",
        year: "2014",
        series: "IndyCar",
        race_order: 127,
      show: true
    },
    {
        race_name: "98th Indianapolis 500-Mile Race",
        year: "2014",
        series: "IndyCar",
        race_order: 128,
      show: true
    },
    {
        race_name: "Chevrolet Indy Dual in Detroit presented by Quicken Loans - R1",
        year: "2014",
        series: "IndyCar",
        race_order: 129,
      show: true
    },        
   {
        race_name: "Chevrolet Indy Dual in Detroit presented by Quicken Loans - R2",
        year: "2014",
        series: "IndyCar",
        race_order: 130,
      show: true
    },
    {
        race_name: "Firestone 600",
        year: "2014",
        series: "IndyCar",
        race_order: 131,
      show: true
    },
    {
        race_name: "Shell and Pennzoil Grand Prix of Houston - R1",
        year: "2014",
        series: "IndyCar",
        race_order: 132,
      show: true
    },
    {
        race_name: "Shell and Pennzoil Grand Prix of Houston - R2",
        year: "2014",
        series: "IndyCar",
        race_order: 133,
      show: true
    },
    {
        race_name: "Pocono IndyCar 500 Fueled by Sunoco",
        year: "2014",
        series: "IndyCar",
        race_order: 134,
      show: true
    },  
    {
        race_name: "Iowa Corn Indy 300 presented by DeKalb",
        year: "2014",
        series: "IndyCar",
        race_order: 135,
      show: true
    },
    {
        race_name: "Honda Indy Toronto - R1",
        year: "2014",
        series: "IndyCar",
        race_order: 136,
      show: true
    },
    {
        race_name: "Honda Indy Toronto - R2",
        year: "2014",
        series: "IndyCar",
        race_order: 137,
      show: true
    },
    {
        race_name: "Honda Indy 200 at Mid-Ohio",
        year: "2014",
        series: "IndyCar",
        race_order: 138,
      show: true
    },
    {
        race_name: "ABC Supply Wisconsin 250",
        year: "2014",
        series: "IndyCar",
        race_order: 139,
      show: true
    },
    {
        race_name: "GoPro Grand Prix of Sonoma",
        year: "2014",
        series: "IndyCar",
        race_order: 140,
      show: true
    },
    {
        race_name: "MAVTV 500 IndyCar World Championships",
        year: "2014",
        series: "IndyCar",
        race_order: 141,
      show: true
    },


//2015 IndyCar Season
    {
        race_name: "Firestone Grand Prix of St. Petersburg",
        year: "2015",
        series: "IndyCar",
        race_order: 142,
      show: true
    },
    {
        race_name: "Indy Grand Prix of Louisiana",
        year: "2015",
        series: "IndyCar",
        race_order: 143,
      show: true
    },
    {
        race_name: "41st Toyota Grand Prix of Long Beach",
        year: "2015",
        series: "IndyCar",
        race_order: 144,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2015",
        series: "IndyCar",
        race_order: 145,
      show: true
    },
    {
        race_name: "Angie's List Grand Prix of Indianapolis",
        year: "2015",
        series: "IndyCar",
        race_order: 146,
      show: true
    },
    {
        race_name: "99th Indianapolis 500",
        year: "2015",
        series: "IndyCar",
        race_order: 147,
      show: true
    },
    {
        race_name: "Chevrolet Indy Dual in Detroit - R1",
        year: "2015",
        series: "IndyCar",
        race_order: 148,
      show: true
    },        
   {
        race_name: "Chevrolet Indy Dual in Detroit - R2",
        year: "2015",
        series: "IndyCar",
        race_order: 149,
      show: true
    },
    {
        race_name: "Firestone 600",
        year: "2015",
        series: "IndyCar",
        race_order: 150,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2015",
        series: "IndyCar",
        race_order: 151,
      show: true
    },
    {
        race_name: "MAVTV 500",
        year: "2015",
        series: "IndyCar",
        race_order: 152,
      show: true
    },
    {
        race_name: "ABC Supply Wisconsin 250",
        year: "2015",
        series: "IndyCar",
        race_order: 153,
      show: true
    },
    {
        race_name: "Iowa Corn 300",
        year: "2015",
        series: "IndyCar",
        race_order: 154,
      show: true
    },
    {
        race_name: "Honda Indy 200",
        year: "2015",
        series: "IndyCar",
        race_order: 155,
      show: true
    },
    {
        race_name: "ABC Supply 500",
        year: "2015",
        series: "IndyCar",
        race_order: 156,
      show: true
    },
    {
        race_name: "GoPro Grand Prix of Sonoma",
        year: "2015",
        series: "IndyCar",
        race_order: 157,
      show: true
    },

//2016 IndyCar Season
    {
        race_name: "Firestone Grand Prix of St. Petersburg",
        year: "2016",
        series: "IndyCar",
        race_order: 158,
      show: true
    },
    {
        race_name: "Desert Diamond West Valley Phoenix Grand Prix",
        year: "2016",
        series: "IndyCar",
        race_order: 159,
      show: true
    },
    {
        race_name: "42nd Toyota Grand Prix of Long Beach",
        year: "2016",
        series: "IndyCar",
        race_order: 160,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2016",
        series: "IndyCar",
        race_order: 161,
      show: true
    },
    {
        race_name: "Angie's List Grand Prix of Indianapolis",
        year: "2016",
        series: "IndyCar",
        race_order: 162,
      show: true
    },
    {
        race_name: "100th Indianapolis 500 presented by PennGrade",
        year: "2016",
        series: "IndyCar",
        race_order: 163,
      show: true
    },
    {
        race_name: "Chevrolet Dual in Detroit Presented by Quicken Loans - R1",
        year: "2016",
        series: "IndyCar",
        race_order: 164,
      show: true
    },
    {
        race_name: "Chevrolet Dual in Detroit Presented by Quicken Loans - R2",
        year: "2016",
        series: "IndyCar",
        race_order: 165,
      show: true
    },
    {
        race_name: "Kohler Grand Prix",
        year: "2016",
        series: "IndyCar",
        race_order: 166,
      show: true
    },
    {
        race_name: "Iowa Corn 300",
        year: "2016",
        series: "IndyCar",
        race_order: 167,
      show: true
    },            
   {
        race_name: "Honda Indy Toronto",
        year: "2016",
        series: "IndyCar",
        race_order: 168,
      show: true
    },
    {
        race_name: "Honda Indy 200",
        year: "2016",
        series: "IndyCar",
        race_order: 169,
      show: true
    },
    {
        race_name: "ABC Supply 500",
        year: "2016",
        series: "IndyCar",
        race_order: 170,
      show: true
    },
    {
        race_name: "Firestone 600",
        year: "2016",
        series: "IndyCar",
        race_order: 171,
      show: true
    },
    {
        race_name: "Grand Prix at The Glen",
        year: "2016",
        series: "IndyCar",
        race_order: 171.1,
      show: true
    },
    {
        race_name: "GoPro Grand Prix of Sonoma",
        year: "2016",
        series: "IndyCar",
        race_order: 171.2,
      show: true
    },


//2017 Race Season INDY
    {
        race_name: "Firestone Grand Prix of St. Petersburg",
        year: "2017",
        series: "IndyCar",
        race_order: 172,
      show: true
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2017",
        series: "IndyCar",
        race_order: 173,
      show: true
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2017",
        series: "IndyCar",
        race_order: 174,
      show: true
    },
    {
        race_name: "Desert Diamond West Valley Phoenix Grand Prix",
        year: "2017",
        series: "IndyCar",
        race_order: 175,
      show: true
    },
    {
        race_name: "IndyCar Grand Prix",
        year: "2017",
        series: "IndyCar",
        race_order: 176,
      show: true
    },
    {
        race_name: "101st Indianapolis 500 presented by PennGrade",
        year: "2017",
        series: "IndyCar",
        race_order: 177,
      show: true
    },
    {
        race_name: "Chevrolet Detroit Grand Prix Presented by Lear Corporation - R1",
        year: "2017",
        series: "IndyCar",
        race_order: 178,
      show: true
    },
    {
        race_name: "Chevrolet Detroit Grand Prix Presented by Lear Corporation - R2",
        year: "2017",
        series: "IndyCar",
        race_order: 179,
      show: true
    },
    {
        race_name: "Rainguard Water Sealers 600",
        year: "2017",
        series: "IndyCar",
        race_order: 180,
      show: true
    },
    {
        race_name: "Kohler Grand Prix",
        year: "2017",
        series: "IndyCar",
        race_order: 181,
      show: true
    },
    {
        race_name: "Iowa Corn 300",
        year: "2017",
        series: "IndyCar",
        race_order: 182,
      show: true
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2017",
        series: "IndyCar",
        race_order: 183,
      show: true
    },
    {
        race_name: "Honda Indy 200",
        year: "2017",
        series: "IndyCar",
        race_order: 184,
      show: true
    },
    {
        race_name: "ABC Supply 500",
        year: "2017",
        series: "IndyCar",
        race_order: 185,
      show: true
    },
    {
        race_name: "Bommarito Automotive Group 500 Presented by Valvoline",
        year: "2017",
        series: "IndyCar",
        race_order: 186,
      show: true
    },
    {
        race_name: "Grand Prix at The Glen",
        year: "2017",
        series: "IndyCar",
        race_order: 187,
      show: true
    },
    {
        race_name: "GoPro Grand Prix of Sonoma",
        year: "2017",
        series: "IndyCar",
        race_order: 188,
      show: true
    },















    
//2018 Race Season F1
    {
        race_name: "Firestone Grand Prix of St. Petersburg",
        year: "2018",
        series: "IndyCar",
        race_order: 189,
      show: true
    },
    {
        race_name: "Desert Diamond West Valley Phoenix Grand Prix",
        year: "2018",
        series: "IndyCar",
        race_order: 190
    },
    {
        race_name: "Toyota Grand Prix of Long Beach",
        year: "2018",
        series: "IndyCar",
        race_order: 191
    },
    {
        race_name: "Honda Indy Grand Prix of Alabama",
        year: "2018",
        series: "IndyCar",
        race_order: 192
    },
    {
        race_name: "IndyCar Grand Prix",
        year: "2018",
        series: "IndyCar",
        race_order: 193
    },
    {
        race_name: "102nd Indianapolis 500 Presented by PennGrade Motor Oil",
        year: "2018",
        series: "IndyCar",
        race_order: 194
    },
    {
        race_name: "Chevrolet Detroit Grand Prix Presented by Lear Corporation - R1",
        year: "2018",
        series: "IndyCar",
        race_order: 195
    },
    {
        race_name: "Chevrolet Detroit Grand Prix Presented by Lear Corporation - R2",
        year: "2018",
        series: "IndyCar",
        race_order: 196
    },
    {
        race_name: "DXC Technology 600",
        year: "2018",
        series: "IndyCar",
        race_order: 197
    },
    {
        race_name: "Kohler Grand Prix",
        year: "2018",
        series: "IndyCar",
        race_order: 198
    },
    {
        race_name: "Iowa Corn 300",
        year: "2018",
        series: "IndyCar",
        race_order: 199
    },
    {
        race_name: "Honda Indy Toronto",
        year: "2018",
        series: "IndyCar",
        race_order: 200
    },
    {
        race_name: "Honda Indy 200 at Mid-Ohio",
        year: "2018",
        series: "IndyCar",
        race_order: 201
    },
    {
        race_name: "ABC Supply 500",
        year: "2018",
        series: "IndyCar",
        race_order: 202
    },
    {
        race_name: "Bommarito Automotive Group 500 Presented by Valvoline",
        year: "2018",
        series: "IndyCar",
        race_order: 203
    },
    {
        race_name: "Grand Prix of Portland",
        year: "2018",
        series: "IndyCar",
        race_order: 204
    },
    {
        race_name: "Grand Prix of Sonoma",
        year: "2018",
        series: "IndyCar",
        race_order: 205
    }
]





function seedINDYCAR(){
    
                    
                    
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

module.exports = seedINDYCAR;



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



