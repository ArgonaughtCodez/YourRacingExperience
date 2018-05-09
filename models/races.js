var mongoose = require("mongoose");

var racesSchema = new mongoose.Schema({
    race_name: String,
    year: String,
    series: String,
    race_order: Number,
    show: {type: Boolean, default: false}
})


module.exports = mongoose.model("Race", racesSchema);