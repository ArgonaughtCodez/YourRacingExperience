var mongoose = require("mongoose");

//SCHEMA SET UP
var postsSchema = new mongoose.Schema({
    name: String,
    image: String,
    image_id: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    year: String,
    race: String,
    series: String
})



// Posts.create(
//     {
//         name: "My First F1 Race",
//         image: "https://farm6.staticflickr.com/5557/15001074595_7a247c926f.jpg",
//         description: "It was awesome, Totally awesome"
//     }, function(err, post){
//         if(err){
//             console.log(err);
//         }else {
//             console.log("New Post");
//             console.log(post);
//         }
//     });



// var posts = 
// [
//     {name: "My First F1 Race", image: "https://farm2.staticflickr.com/1480/24846860276_9400218d53.jpg"},
//     {name: "My Second F1 Race", image: "https://farm6.staticflickr.com/5294/5551552855_941133d518.jpg"},
//     {name: "My Third F1 Race", image: "https://farm6.staticflickr.com/5557/15001074595_7a247c926f.jpg"},
//     {name: "My Fourth F1 Race", image: "https://farm3.staticflickr.com/2932/14449753952_e9c3a9659f.jpg"},
//     {name: "My Fifth F1 Race", image: "https://farm8.staticflickr.com/7534/16085929802_22e380d268.jpg"},
//     {name: "My Sixth F1 Race", image: "https://farm3.staticflickr.com/2908/14264510970_d24a17e3f1.jpg"},
//     {name: "My Seventh F1 Race", image: "https://farm8.staticflickr.com/7129/13156537595_ff5af9dd7e.jpg"},
//     {name: "My Eigth F1 Race", image: "https://farm4.staticflickr.com/3861/14427973436_552ece7994.jpg"},
//     {name: "My Ninth F1 Race", image: "https://farm6.staticflickr.com/5575/14586218216_aaa6479b61.jpg"}
// ]
    
    
module.exports = mongoose.model("Post", postsSchema);