var mongoose = require("mongoose");

var seriesSchema = new mongoose.Schema({
    series_name: String,
    series_short: String,
    reddit_subscribers: Number,
    reddit_link: String,
    show: {type: Boolean, default: false}
})


module.exports = mongoose.model("Series", seriesSchema);