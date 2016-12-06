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

tweetSchema.pre('save', function(next) {
  next();
});

// create model from schema
var Tweet = mongoose.model('Tweet', tweetSchema);

// export the model
module.exports = Tweet;

//----------------------------------------------------------------------------//
