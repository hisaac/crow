//----------------------------------------------------------------------------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//----------------------------------------------------------------------------//

var tweetSchema = new Schema({
  twitter_id: { type: String, default: "" },
  url: { type: String, default: "" },
  posted: { type: Boolean, default: false },
  date_posted: Date,
  date_created: { type: Date, default: Date.now },
  hashtags: { type: String, default: "" },
  mentions: { type: String, default: "" },
  hearts: { type: Number, default: 0 },
  retweets: { type: Number, default: 0 },
  tweet: { type: String, default: "" }
});

tweetSchema.pre('save', function(next) {
  next();
});

// create model from schema
var Tweet = mongoose.model('Tweet', tweetSchema);

// export the model
module.exports = Tweet;

//----------------------------------------------------------------------------//
