var mongoose = require("mongoose");

var seasonsSchema = new mongoose.Schema({
    season_year: String,
    series: String,
    season_order: Number,
    show: {type: Boolean, default: false}
})


module.exports = mongoose.model("Season", seasonsSchema);