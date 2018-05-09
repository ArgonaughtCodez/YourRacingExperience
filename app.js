var express         = require("express"),
    app             = express(),
    expressSanitizer = require("express-sanitizer"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    methodOverride  = require("method-override"),
    LocalStrategy   = require("passport-local"),
    seedClear       = require("./seedClear"),
    seedF1Db        = require("./seedF1"),
    seedNASCARDb    = require("./seedNASCAR"),
    seedWRCDb       = require("./seedWRC"),
    seedMotoGP       = require("./seedMotoGP"),
    seedWEC       = require("./seedWEC"),
    seedINDYCAR       = require("./seedINDYCAR"),
    seedFE       = require("./seedFE"),
    seedWSBK       = require("./seedWSBK"),
    seedWRX       = require("./seedWRX"),
    seedUsers       = require("./seedUsers"),
    Series          = require("./models/series"),
    Races           = require("./models/races"),
    User            = require("./models/user"),
    Posts           = require("./models/posts"),
    Seasons         = require("./models/seasons");
    require('dotenv').config();

var indexRoutes = require("./routes/index"),
    postRoutes = require("./routes/posts"),
    racesRoutes = require("./routes/races"),
    seasonsRoutes = require("./routes/seasons"),
    adminRoutes = require("./routes/admin"),
    seriesRoutes = require("./routes/series");

mongoose.connect("mongodb://localhost/your_racing_exp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedClear();
// seedF1Db();
// seedNASCARDb();
// seedWRCDb();
// seedMotoGP();
// seedWEC();
// seedINDYCAR();
// seedFE();
// seedWSBK();
// seedWRX();
app.use(expressSanitizer());

app.use(require("express-session")({
    secret: "Zulu Siera Lima Papa November",
    resave: false,
    saveUninitialized: false
}));

app.locals.moment = require('moment');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   res.locals.errorEmail = req.flash("errorEmail");
   res.locals.errorUsername = req.flash("errorUsername");
   next();
});

app.use(function(req, res, next){
    if(res.locals.currentUser){
        Posts.find({'author.id': req.user._id}, function(err, usersPosts){
            if(err){
               console.log(err);
            } else { 
                res.locals.usersPosts = usersPosts;
                next();
            }
        });
    } else {
        next();
    }
});


app.use(indexRoutes);
app.use(postRoutes);
app.use(racesRoutes);
app.use(seriesRoutes),
app.use(seasonsRoutes);
app.use(adminRoutes);


// seedUsers();

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YourRacingExp Server has started"); 
});