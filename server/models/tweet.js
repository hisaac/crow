//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//----------------------------------------------------------------------------//

var tweetSchema = new Schema({
  twitter_id: String,
  url: String,
  posted: Boolean,
  date_posted: Date,
  date_created: { type: Date, default: Date.now },
  hashtags: String,
  mentions: String,
  hearts: Number,
  retweets: Number,
  tweet: String
});

//-------------------- FROM SIGMA-MONGOOSE-INTRO-LECTURE ---------------------//

personSchema.pre('save', function(next) {
  next();
});

// step 2 - create the model
var Person = mongoose.model('Person', personSchema);

// step 3 - export our model
module.exports = Person;

//----------------------------------------------------------------------------//
