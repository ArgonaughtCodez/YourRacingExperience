var mongoose = require("mongoose");
var Series = require("./models/series");
var Seasons   = require("./models/seasons");
var Races = require("./models/races");
var Posts   = require("./models/posts");
var User   = require("./models/user");

var dataSeries = [
    {
        series_name: "MotoGP",
        series_short:"MotoGP",
        reddit_subscribers: 30128,
        reddit_link: "https://www.reddit.com/r/motogp/" ,
      show: true
    }
]

var dataSeasons = [
    {
      season_year: "Other",
      series: "MotoGP",
      season_order: 0,
      show: true
    },
    {
      season_year: "2007",
      series: "MotoGP",
      season_order: 1,
      show: true
    },
    {
      season_year: "2008",
      series: "MotoGP",
      season_order: 2,
      show: true
    },
    {
      season_year: "2009",
      series: "MotoGP",
      season_order: 3,
      show: true
    },
    {
      season_year: "2010",
      series: "MotoGP",
      season_order: 4,
      show: true
    },
    {
      season_year: "2011",
      series: "MotoGP",
      season_order: 5,
      show: true
    },
    {
      season_year: "2012",
      series: "MotoGP",
      season_order: 6,
      show: true
    },
    {
      season_year: "2013",
      series: "MotoGP",
      season_order: 7,
      show: true
    },
    {
      season_year: "2014",
      series: "MotoGP",
      season_order: 8,
      show: true
    },
    {
      season_year: "2015",
      series: "MotoGP",
      season_order: 9,
      show: true
    },
    {
      season_year: "2016",
      series: "MotoGP",
      season_order: 10,
      show: true
    },
    {
      season_year: "2017",
      series: "MotoGP",
      season_order: 11,
      show: true
    },
    {
      season_year: "2018",
      series: "MotoGP",
      season_order: 12,
      show: true
    }
]

var dataRaces = [
    //Other F1 Race
    {
        race_name: "Other",
        year: "Other",
        series: "MotoGP",
        race_order: 0,
      show: true
    },
    
//2007 Race Season MotoGP
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2007",
        series: "MotoGP",
        race_order: 1,
      show: true
    },
    {
        race_name: "Gran Premio bwin.com de España",
        year: "2007",
        series: "MotoGP",
        race_order: 2,
      show: true
    },
    {
        race_name: "Grand Prix of Turkey",
        year: "2007",
        series: "MotoGP",
        race_order: 3,
        show: true
    },
    {
        race_name: "Sinopec Great Wall Lubricants GP of China",
        year: "2007",
        series: "MotoGP",
        race_order: 4,
      show: true
    },
    {
        race_name: "Alice Grand Prix de France",
        year: "2007",
        series: "MotoGP",
        race_order: 5,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia Alice",
        year: "2007",
        series: "MotoGP",
        race_order: 6,
      show: true
    },
    {
        race_name: "Gran Premi Cinzano de Catalunya",
        year: "2007",
        series: "MotoGP",
        race_order: 7,
      show: true
    },
    {
        race_name: "Nickel & Dime British Grand Prix",
        year: "2007",
        series: "MotoGP",
        race_order: 8,
      show: true
    },
    {
        race_name: "A-Style TT Assen",
        year: "2007",
        series: "MotoGP",
        race_order: 9,
      show: true
    },
    {
        race_name: "Alice Motorrad Grand Prix Deutschland",
        year: "2007",
        series: "MotoGP",
        race_order: 10,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2007",
        series: "MotoGP",
        race_order: 11,
      show: true
    },
    {
        race_name: "Cardion AB Grand Prix České Republiky",
        year: "2007",
        series: "MotoGP",
        race_order: 12,
      show: true
    },
    {
        race_name: "GP Cinzano di San Marino e Riviera di Rimini",
        year: "2007",
        series: "MotoGP",
        race_order: 13,
      show: true
    },
    {
        race_name: "bwin.com Grande Prémio de Portugal",
        year: "2007",
        series: "MotoGP",
        race_order: 14,
      show: true
    },
    {
        race_name: "A-Style Grand Prix of Japan",
        year: "2007",
        series: "MotoGP",
        race_order: 15,
      show: true
    },
    {
        race_name: "GMC Australian Grand Prix",
        year: "2007",
        series: "MotoGP",
        race_order: 16,
      show: true
    },
    {
        race_name: "Polini Malaysian Motorcycle Grand Prix",
        year: "2007",
        series: "MotoGP",
        race_order: 17,
      show: true
    },
    {
        race_name: "G.P. bwin.com de la Comunitat Valenciana",
        year: "2007",
        series: "MotoGP",
        race_order: 18,
      show: true
    },

//2008 MotoGP Season    
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2008",
        series: "MotoGP",
        race_order: 19,
      show: true
    },
    {
        race_name: "Gran Premio bwin.com de España",
        year: "2008",
        series: "MotoGP",
        race_order: 20,
      show: true
    },
    {
        race_name: "bwin.com Grande Prémio de Portugal",
        year: "2008",
        series: "MotoGP",
        race_order: 21,
      show: true
    },
    {
        race_name: "Pramac Grand Prix of China",
        year: "2008",
        series: "MotoGP",
        race_order: 22,
      show: true
    },
    {
        race_name: "Alice Grand Prix de France",
        year: "2008",
        series: "MotoGP",
        race_order: 23,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia Alice",
        year: "2008",
        series: "MotoGP",
        race_order: 24,
      show: true
    },
    {
        race_name: "Gran Premi Cinzano de Catalunya",
        year: "2008",
        series: "MotoGP",
        race_order: 25,
      show: true
    },
    {
        race_name: "bwin.com British Grand Prix",
        year: "2008",
        series: "MotoGP",
        race_order: 26,
      show: true
    },
    {
        race_name: "A-Style TT Assen",
        year: "2008",
        series: "MotoGP",
        race_order: 27,
      show: true
    },
    {
        race_name: "Alice Motorrad Grand Prix Deutschland",
        year: "2008",
        series: "MotoGP",
        race_order: 28,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2008",
        series: "MotoGP",
        race_order: 29,
      show: true
    },
    {
        race_name: "Cardion AB Grand Prix České Republiky",
        year: "2008",
        series: "MotoGP",
        race_order: 30,
      show: true
    },
    {
        race_name: "GP Cinzano di San Marino e Riviera di Rimini",
        year: "2008",
        series: "MotoGP",
        race_order: 31,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2008",
        series: "MotoGP",
        race_order: 32,
      show: true
    },
    {
        race_name: "A-Style Grand Prix of Japan",
        year: "2008",
        series: "MotoGP",
        race_order: 33,
      show: true
    },
    {
        race_name: "Australian Grand Prix",
        year: "2008",
        series: "MotoGP",
        race_order: 34,
      show: true
    },
    {
        race_name: "Polini Malaysian Motorcycle Grand Prix",
        year: "2008",
        series: "MotoGP",
        race_order: 35,
      show: true
    },
    {
        race_name: "GP Parts Europe de la Comunitat Valenciana",
        year: "2008",
        series: "MotoGP",
        race_order: 36,
      show: true
    },

//2009 MotoGP Season    
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2009",
        series: "MotoGP",
        race_order: 37,
      show: true
    },
    {
        race_name: "Polini Grand Prix of Japan",
        year: "2009",
        series: "MotoGP",
        race_order: 38,
      show: true
    },
    {
        race_name: "Gran Premio bwin.com de España",
        year: "2009",
        series: "MotoGP",
        race_order: 39,
      show: true
    },
    {
        race_name: "Grand Prix de France",
        year: "2009",
        series: "MotoGP",
        race_order: 40,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia Alice",
        year: "2009",
        series: "MotoGP",
        race_order: 41,
      show: true
    },
    {
        race_name: "Gran Premi Cinzano de Catalunya",
        year: "2009",
        series: "MotoGP",
        race_order: 42,
      show: true
    },
    {
        race_name: "Alice TT Assen",
        year: "2009",
        series: "MotoGP",
        race_order: 43,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2009",
        series: "MotoGP",
        race_order: 44,
      show: true
    },
    {
        race_name: "Alice Motorrad Grand Prix Deutschland",
        year: "2009",
        series: "MotoGP",
        race_order: 45,
      show: true
    },
    {
        race_name: "British Grand Prix",
        year: "2009",
        series: "MotoGP",
        race_order: 46,
      show: true
    },
    {
        race_name: "Cardion AB Grand Prix České Republiky",
        year: "2009",
        series: "MotoGP",
        race_order: 47,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2009",
        series: "MotoGP",
        race_order: 48,
      show: true
    },
    {
        race_name: "GP Cinzano di San Marino e Riviera di Rimini",
        year: "2009",
        series: "MotoGP",
        race_order: 49,
      show: true
    },
    {
        race_name: "bwin.com Grande Prémio de Portugal",
        year: "2009",
        series: "MotoGP",
        race_order: 50,
      show: true
    },    
    {
        race_name: "Iveco Australian Grand Prix",
        year: "2009",
        series: "MotoGP",
        race_order: 51,
      show: true
    },
    {
        race_name: "Shell Advance Malaysian Motorcycle GP",
        year: "2009",
        series: "MotoGP",
        race_order: 52,
      show: true
    },
    {
        race_name: "GP Generali de la Comunitat Valenciana",
        year: "2009",
        series: "MotoGP",
        race_order: 53,
      show: true
    },


//2010 MotoGP Season    
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2010",
        series: "MotoGP",
        race_order: 54,
      show: true
    },
    {
        race_name: "Gran Premio bwin de España",
        year: "2010",
        series: "MotoGP",
        race_order: 55,
      show: true
    },
    {
        race_name: "Monster Energy Grand Prix de France",
        year: "2010",
        series: "MotoGP",
        race_order: 56,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia TIM",
        year: "2010",
        series: "MotoGP",
        race_order: 57,
      show: true
    },
    {
        race_name: "AirAsia British Grand Prix",
        year: "2010",
        series: "MotoGP",
        race_order: 58,
      show: true
    },
    {
        race_name: "TIM TT Assen",
        year: "2010",
        series: "MotoGP",
        race_order: 59,
      show: true
    },
    {
        race_name: "Gran Premi Aperol de Catalunya",
        year: "2010",
        series: "MotoGP",
        race_order: 60,
      show: true
    },
    {
        race_name: "eni Motorrad Grand Prix Deutschland",
        year: "2010",
        series: "MotoGP",
        race_order: 61,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2010",
        series: "MotoGP",
        race_order: 62,
      show: true
    },
    {
        race_name: "Cardion AB Grand Prix České Republiky",
        year: "2010",
        series: "MotoGP",
        race_order: 63,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2010",
        series: "MotoGP",
        race_order: 64,
      show: true
    },
    {
        race_name: "GP Aperol di San Marino e Riviera di Rimini",
        year: "2010",
        series: "MotoGP",
        race_order: 65,
      show: true
    },
    {
        race_name: "Gran Premio A-Style de Aragón",
        year: "2010",
        series: "MotoGP",
        race_order: 66,
      show: true
    },
    {
        race_name: "Grand Prix of Japan",
        year: "2010",
        series: "MotoGP",
        race_order: 67,
      show: true
    },
    {
        race_name: "Shell Advance Malaysian Motorcycle Grand Prix",
        year: "2010",
        series: "MotoGP",
        race_order: 68,
      show: true
    },
    {
        race_name: "Iveco Australian Grand Prix",
        year: "2010",
        series: "MotoGP",
        race_order: 69,
      show: true
    },
    {
        race_name: "bwin Grande Prémio de Portugal",
        year: "2010",
        series: "MotoGP",
        race_order: 70,
      show: true
    },
    {
        race_name: "GP Generali de la Comunitat Valenciana",
        year: "2010",
        series: "MotoGP",
        race_order: 71,
      show: true
    },

//2011 Race Season MotoGP
   {
        race_name: "Commercialbank Qatar Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 72,
      show: true
    },
    {
        race_name: "bwin Spanish Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 73,
      show: true
    },
    {
        race_name: "bwin Portuguese Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 74,
      show: true
    },

    {
        race_name: "Monster Energy French Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 75,
      show: true
    },
    {
        race_name: "Aperol Catalan Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 76,
      show: true
    },
    {
        race_name: "AirAsia British Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 77,
      show: true
    },
    {
        race_name: "Iveco TT Assen",
        year: "2011",
        series: "MotoGP",
        race_order: 78,
      show: true
    },
    {
        race_name: "Telecom Italia Mobile Italian Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 79,
      show: true
    },
    {
        race_name: "Eni German Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 80,
      show: true
    },
    {
        race_name: "Red Bull United States Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 81,
      show: true
    },
    {
        race_name: "Cardion ab Czech Republic Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 82,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 83,
      show: true
    },
    {
        race_name: "Aperol San Marino Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 84,
      show: true
    },
    {
        race_name: "Aragon Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 85,
      show: true
    },
    {
        race_name: "Japanese Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 86,
      show: true
    },
    {
        race_name: "Iveco Australian Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 87,
      show: true
    },
    {
        race_name: "Shell Advance Malaysian Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 88,
      show: true
    },
    {
        race_name: "Generali Valencian Grand Prix",
        year: "2011",
        series: "MotoGP",
        race_order: 89,
      show: true
    },

//2012 Race Season MotoGP    
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2012",
        series: "MotoGP",
        race_order: 90,
      show: true
    },  
    {
        race_name: "Gran Premio bwin de España",
        year: "2012",
        series: "MotoGP",
        race_order: 91,
      show: true
    },
    {
        race_name: "Grande Premio de Portugal Circuito Estoril",
        year: "2012",
        series: "MotoGP",
        race_order: 92,
      show: true
    },
    {
        race_name: "Monster Energy Grand Prix de France",
        year: "2012",
        series: "MotoGP",
        race_order: 93,
      show: true
    },
    {
        race_name: "Gran Premi Aperol de Catalunya",
        year: "2012",
        series: "MotoGP",
        race_order: 94,
      show: true
    },
    {
        race_name: "Hertz British Grand Prix",
        year: "2012",
        series: "MotoGP",
        race_order: 95,
      show: true
    },
    {
        race_name: "Iveco TT Assen",
        year: "2012",
        series: "MotoGP",
        race_order: 96,
      show: true
    },
    {
        race_name: "eni Motorrad Grand Prix Deutschland",
        year: "2012",
        series: "MotoGP",
        race_order: 97,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia TIM",
        year: "2012",
        series: "MotoGP",
        race_order: 98,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2012",
        series: "MotoGP",
        race_order: 99,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2012",
        series: "MotoGP",
        race_order: 100,
      show: true
    },
    {
        race_name: "bwin Grand Prix České Republiky",
        year: "2012",
        series: "MotoGP",
        race_order: 101,
      show: true
    },
    {
        race_name: "GP Aperol di San Marino e della Riviera di Rimini",
        year: "2012",
        series: "MotoGP",
        race_order: 102,
      show: true
    },
    {
        race_name: "Gran Premio Iveco de Aragón",
        year: "2012",
        series: "MotoGP",
        race_order: 103,
      show: true
    },
    {
        race_name: "AirAsia Grand Prix of Japan",
        year: "2012",
        series: "MotoGP",
        race_order: 104,
      show: true
    },
    {
        race_name: "Malaysian Motorcycle Grand Prix",
        year: "2012",
        series: "MotoGP",
        race_order: 105,
      show: true
    },
    {
        race_name: "AirAsia Australian Grand Prix",
        year: "2012",
        series: "MotoGP",
        race_order: 106,
      show: true
    },
    {
        race_name: "Gran Premio Generali de la Comunitat Valenciana",
        year: "2012",
        series: "MotoGP",
        race_order: 107,
      show: true
    },

//2013 MotoGP Season    
    {
        race_name: "Commercialbank Grand Prix of Qatar",
        year: "2013",
        series: "MotoGP",
        race_order: 108,
      show: true
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2013",
        series: "MotoGP",
        race_order: 109,
      show: true
    },
    {
        race_name: "Gran Premio bwin de España",
        year: "2013",
        series: "MotoGP",
        race_order: 110,
      show: true
    },  
   {
        race_name: "Monster Energy Grand Prix de France",
        year: "2013",
        series: "MotoGP",
        race_order: 111,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia TIM",
        year: "2013",
        series: "MotoGP",
        race_order: 112,
      show: true
    },
    {
        race_name: "Gran Premi Aperol de Catalunya",
        year: "2013",
        series: "MotoGP",
        race_order: 113,
      show: true
    },
    {
        race_name: "Iveco TT Assen",
        year: "2013",
        series: "MotoGP",
        race_order: 114,
      show: true
    },
    {
        race_name: "eni Motorrad Grand Prix Deutschland",
        year: "2013",
        series: "MotoGP",
        race_order: 115,
      show: true
    },
    {
        race_name: "Red Bull U.S. Grand Prix",
        year: "2013",
        series: "MotoGP",
        race_order: 116,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2013",
        series: "MotoGP",
        race_order: 117,
      show: true
    },
    {
        race_name: "bwin Grand Prix Ceské Republiky",
        year: "2013",
        series: "MotoGP",
        race_order: 118,
      show: true
    },
    {
        race_name: "Hertz British Grand Prix",
        year: "2013",
        series: "MotoGP",
        race_order: 119,
      show: true
    },
    {
        race_name: "GP Aperol di San Marino e della Riviera di Rimini",
        year: "2013",
        series: "MotoGP",
        race_order: 120,
      show: true
    },
    {
        race_name: "Gran Premio Iveco de Aragón",
        year: "2013",
        series: "MotoGP",
        race_order: 121,
      show: true
    },
    {
        race_name: "Shell Advance Malaysian Motorcycle Grand Prix",
        year: "2013",
        series: "MotoGP",
        race_order: 122,
      show: true
    },
    {
        race_name: "Tissot Australian Grand Prix",
        year: "2013",
        series: "MotoGP",
        race_order: 123,
      show: true
    },
    {
        race_name: "AirAsia Grand Prix of Japan",
        year: "2013",
        series: "MotoGP",
        race_order: 124,
      show: true
    },
    {
        race_name: "Gran Premio Generali de la Comunitat Valenciana",
        year: "2013",
        series: "MotoGP",
        race_order: 125,
      show: true
    },

//2014 MotoGP Season
    {
        race_name: "Commercial Bank Grand Prix of Qatar",
        year: "2014",
        series: "MotoGP",
        race_order: 126,
      show: true
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2014",
        series: "MotoGP",
        race_order: 127,
      show: true
    },
    {
        race_name: "Gran Premio Red Bull de la República Argentina",
        year: "2014",
        series: "MotoGP",
        race_order: 128,
      show: true
    },
    {
        race_name: "Gran Premio bwin de España",
        year: "2014",
        series: "MotoGP",
        race_order: 129,
      show: true
    },        
   {
        race_name: "Monster Energy Grand Prix de France",
        year: "2014",
        series: "MotoGP",
        race_order: 130,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia TIM",
        year: "2014",
        series: "MotoGP",
        race_order: 131,
      show: true
    },
    {
        race_name: "Gran Premi Monster Energy de Catalunya",
        year: "2014",
        series: "MotoGP",
        race_order: 132,
      show: true
    },
    {
        race_name: "Iveco Daily TT Assen",
        year: "2014",
        series: "MotoGP",
        race_order: 133,
      show: true
    },
    {
        race_name: "eni Motorrad Grand Prix Deutschland",
        year: "2014",
        series: "MotoGP",
        race_order: 134,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2014",
        series: "MotoGP",
        race_order: 135,
      show: true
    },
    {
        race_name: "bwin Grand Prix České republiky",
        year: "2014",
        series: "MotoGP",
        race_order: 136,
      show: true
    },
    {
        race_name: "Hertz British Grand Prix",
        year: "2014",
        series: "MotoGP",
        race_order: 137,
      show: true
    },
    {
        race_name: "GP TIM di San Marino e della Riviera di Rimini",
        year: "2014",
        series: "MotoGP",
        race_order: 138,
      show: true
    },
    {
        race_name: "Gran Premio Movistar de Aragón",
        year: "2014",
        series: "MotoGP",
        race_order: 139,
      show: true
    },
    {
        race_name: "Motul Grand Prix of Japan",
        year: "2014",
        series: "MotoGP",
        race_order: 140,
      show: true
    },
    {
        race_name: "Tissot Australian Grand Prix",
        year: "2014",
        series: "MotoGP",
        race_order: 141,
      show: true
    },
    {
        race_name: "Shell Advance Malaysian Motorcycle Grand Prix",
        year: "2014",
        series: "MotoGP",
        race_order: 142,
      show: true
    },
    {
        race_name: "Gran Premio Generali de la Comunitat Valenciana",
        year: "2014",
        series: "MotoGP",
        race_order: 143,
      show: true
    },

//2015 MotoGP Season
    {
        race_name: "Commercial Bank Grand Prix of Qatar",
        year: "2015",
        series: "MotoGP",
        race_order: 144,
      show: true
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2015",
        series: "MotoGP",
        race_order: 145,
      show: true
    },
    {
        race_name: "Gran Premio Red Bull de la República Argentina",
        year: "2015",
        series: "MotoGP",
        race_order: 146,
      show: true
    },
    {
        race_name: "Gran Premio bwin de España",
        year: "2015",
        series: "MotoGP",
        race_order: 147,
      show: true
    },
    {
        race_name: "Monster Energy Grand Prix de France",
        year: "2015",
        series: "MotoGP",
        race_order: 148,
      show: true
    },        
   {
        race_name: "Gran Premio d'Italia TIM",
        year: "2015",
        series: "MotoGP",
        race_order: 149,
      show: true
    },
    {
        race_name: "Gran Premi Monster Energy de Catalunya",
        year: "2015",
        series: "MotoGP",
        race_order: 150,
      show: true
    },
    {
        race_name: "Motul TT Assen",
        year: "2015",
        series: "MotoGP",
        race_order: 151,
      show: true
    },
    {
        race_name: "GoPro Motorrad Grand Prix Deutschland",
        year: "2015",
        series: "MotoGP",
        race_order: 152,
      show: true
    },
    {
        race_name: "Red Bull Indianapolis Grand Prix",
        year: "2015",
        series: "MotoGP",
        race_order: 153,
      show: true
    },
    {
        race_name: "bwin Grand Prix České republiky",
        year: "2015",
        series: "MotoGP",
        race_order: 154,
      show: true
    },
    {
        race_name: "Octo British Grand Prix",
        year: "2015",
        series: "MotoGP",
        race_order: 155,
      show: true
    },
    {
        race_name: "Gran Premio TIM di San Marino e della Riviera di Rimini",
        year: "2015",
        series: "MotoGP",
        race_order: 156,
      show: true
    },
    {
        race_name: "Gran Premio Movistar de Aragón",
        year: "2015",
        series: "MotoGP",
        race_order: 157,
      show: true
    },
    {
        race_name: "Motul Grand Prix of Japan",
        year: "2015",
        series: "MotoGP",
        race_order: 158,
      show: true
    },
    {
        race_name: "Pramac Australian Motorcycle Grand Prix",
        year: "2015",
        series: "MotoGP",
        race_order: 159,
      show: true
    },
    {
        race_name: "Shell Malaysia Motorcycle Grand Prix",
        year: "2015",
        series: "MotoGP",
        race_order: 160,
      show: true
    },
    {
        race_name: "Gran Premio Motul de la Comunitat Valenciana",
        year: "2015",
        series: "MotoGP",
        race_order: 161,
      show: true
    },


//2016 MotoGP Season    
    {
        race_name: "Commercial Bank Grand Prix of Qatar",
        year: "2016",
        series: "MotoGP",
        race_order: 162,
      show: true
    },
    {
        race_name: "Gran Premio Motul de la República Argentina",
        year: "2016",
        series: "MotoGP",
        race_order: 163,
      show: true
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2016",
        series: "MotoGP",
        race_order: 164,
      show: true
    },
    {
        race_name: "Gran Premio Red Bull de España",
        year: "2016",
        series: "MotoGP",
        race_order: 165,
      show: true
    },
    {
        race_name: "Monster Energy Grand Prix de France",
        year: "2016",
        series: "MotoGP",
        race_order: 166,
      show: true
    },
    {
        race_name: "Gran Premio d'Italia TIM",
        year: "2016",
        series: "MotoGP",
        race_order: 167,
      show: true
    },            
   {
        race_name: "Gran Premi Monster Energy de Catalunya",
        year: "2016",
        series: "MotoGP",
        race_order: 168,
      show: true
    },
    {
        race_name: "Motul TT Assen",
        year: "2016",
        series: "MotoGP",
        race_order: 169,
      show: true
    },
    {
        race_name: "GoPro Motorrad Grand Prix Deutschland",
        year: "2016",
        series: "MotoGP",
        race_order: 170,
      show: true
    },
    {
        race_name: "NeroGiardini Motorrad Grand Prix von Österreich",
        year: "2016",
        series: "MotoGP",
        race_order: 171,
      show: true
    },
    {
        race_name: "HJC Helmets Grand Prix České republiky",
        year: "2016",
        series: "MotoGP",
        race_order: 172,
      show: true
    },
    {
        race_name: "Octo British Grand Prix",
        year: "2016",
        series: "MotoGP",
        race_order: 173,
      show: true
    },
    {
        race_name: "Gran Premio TIM di San Marino e della Riviera di Rimini",
        year: "2016",
        series: "MotoGP",
        race_order: 174,
      show: true
    },
    {
        race_name: "Gran Premio Movistar de Aragón",
        year: "2016",
        series: "MotoGP",
        race_order: 175,
      show: true
    },
    {
        race_name: "Motul Grand Prix of Japan",
        year: "2016",
        series: "MotoGP",
        race_order: 176,
      show: true
    },
    {
        race_name: "Michelin Australian Motorcycle Grand Prix",
        year: "2016",
        series: "MotoGP",
        race_order: 177,
      show: true
    },
    {
        race_name: "Shell Malaysia Motorcycle Grand Prix",
        year: "2016",
        series: "MotoGP",
        race_order: 178,
      show: true
    },
    {
        race_name: "Gran Premio Motul de la Comunitat Valenciana",
        year: "2016",
        series: "MotoGP",
        race_order: 179,
      show: true
    },
    
    //2017 MotoGP Race
    {
        race_name: "Grand Prix of Qatar",
        year: "2017",
        series: "MotoGP",
        race_order: 180,
        show: true
    },
    {
        race_name: "Gran Premio Motul de la República Argentina",
        year: "2017",
        series: "MotoGP",
        race_order: 181,
        show: true
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2017",
        series: "MotoGP",
        race_order: 182,
        show: true
    },
    {
        race_name: "Gran Premio Red Bull de España",
        year: "2017",
        series: "MotoGP",
        race_order: 183,
        show: true
    },
    {
        race_name: "HJC Helmets Grand Prix de France",
        year: "2017",
        series: "MotoGP",
        race_order: 184,
        show: true
    },
    {
        race_name: "Gran Premio d'Italia Oakley",
        year: "2017",
        series: "MotoGP",
        race_order: 185,
        show: true
    },
    {
        race_name: "Gran Premi Monster Energy de Catalunya",
        year: "2017",
        series: "MotoGP",
        race_order: 186,
        show: true
    },
    {
        race_name: "Motul TT Assen",
        year: "2017",
        series: "MotoGP",
        race_order: 187,
        show: true
    },
    {
        race_name: "GoPro Motorrad Grand Prix Deutschland",
        year: "2017",
        series: "MotoGP",
        race_order: 188,
        show: true
    },
    {
        race_name: "Monster Energy Grand Prix České republiky",
        year: "2017",
        series: "MotoGP",
        race_order: 189,
        show: true
    },
    {
        race_name: "NeroGiardini Motorrad Grand Prix von Österreich",
        year: "2017",
        series: "MotoGP",
        race_order: 190,
        show: true
    },
    {
        race_name: "Octo British Grand Prix",
        year: "2017",
        series: "MotoGP",
        race_order: 191,
        show: true
    },
    {
        race_name: "Gran Premio Tribul MasterCard di San Marino e della Riviera di Rimini",
        year: "2017",
        series: "MotoGP",
        race_order: 192,
        show: true
    },
    {
        race_name: "Gran Premio Movistar de Aragón",
        year: "2017",
        series: "MotoGP",
        race_order: 193,
        show: true
    },
    {
        race_name: "Motul Grand Prix of Japan",
        year: "2017",
        series: "MotoGP",
        race_order: 194,
        show: true
    },
    {
        race_name: "Michelin Australian Motorcycle Grand Prix",
        year: "2017",
        series: "MotoGP",
        race_order: 195,
        show: true
    },
    {
        race_name: "Shell Malaysia Motorcycle Grand Prix",
        year: "2017",
        series: "MotoGP",
        race_order: 196,
        show: true
    },
    {
        race_name: "Gran Premio Motul de la Comunitat Valenciana",
        year: "2017",
        series: "MotoGP",
        race_order: 197,
        show: true
    },
    
//2018 Race Season F1
    {
        race_name: "Gulf Oil Grand Prix of Qatar",
        year: "2018",
        series: "MotoGP",
        race_order: 198,
      show: true
    },
    {
        race_name: "Gran Premio Motul de la República Argentina",
        year: "2018",
        series: "MotoGP",
        race_order: 199
    },
    {
        race_name: "Red Bull Grand Prix of the Americas",
        year: "2018",
        series: "MotoGP",
        race_order: 200
    },
    {
        race_name: "Gran Premio Red Bull de España",
        year: "2018",
        series: "MotoGP",
        race_order: 201
    },
    {
        race_name: "HJC Helmets Grand Prix de France",
        year: "2018",
        series: "MotoGP",
        race_order: 202
    },
    {
        race_name: "Gran Premio d'Italia Oakley",
        year: "2018",
        series: "MotoGP",
        race_order: 203
    },
    {
        race_name: "Gran Premi Monster Energy de Catalunya",
        year: "2018",
        series: "MotoGP",
        race_order: 204
    },
    {
        race_name: "Motul TT Assen",
        year: "2018",
        series: "MotoGP",
        race_order: 205
    },
    {
        race_name: "GoPro Motorrad Grand Prix Deutschland",
        year: "2018",
        series: "MotoGP",
        race_order: 206
    },
    {
        race_name: "Monster Energy Grand Prix České republiky",
        year: "2018",
        series: "MotoGP",
        race_order: 207
    },
    {
        race_name: "Motorrad Grand Prix von Österreich",
        year: "2018",
        series: "MotoGP",
        race_order: 208
    },
    {
        race_name: "Octo British Grand Prix",
        year: "2018",
        series: "MotoGP",
        race_order: 209
    },
    {
        race_name: "Gran Premio Tribul MasterCard di San Marino e della Riviera di Rimini",
        year: "2018",
        series: "MotoGP",
        race_order: 210
    },
    {
        race_name: "Gran Premio Movistar de Aragón",
        year: "2018",
        series: "MotoGP",
        race_order: 211
    },
    {
        race_name: "PTT Thailand Grand Prix",
        year: "2018",
        series: "MotoGP",
        race_order: 212
    },
    {
        race_name: "Motul Grand Prix of Japan",
        year: "2018",
        series: "MotoGP",
        race_order: 213
    },
    {
        race_name: "Michelin Australian Motorcycle Grand Prix",
        year: "2018",
        series: "MotoGP",
        race_order: 214
    },
    {
        race_name: "Shell Malaysia Motorcycle Grand Prix",
        year: "2018",
        series: "MotoGP",
        race_order: 215
    },
    {
        race_name: "Gran Premio Motul de la Comunitat Valenciana",
        year: "2018",
        series: "MotoGP",
        race_order: 216
    }
]





function seedMotoGP(){
    
                    
                    
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

module.exports = seedMotoGP;



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



