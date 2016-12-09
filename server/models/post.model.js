//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//----------------------------------------------------------------------------//

var postSchema = new Schema({
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

postSchema.pre('save', function(next) {
  next();
});

// create model from schema
var Post = mongoose.model('Post', postSchema);

// export the model
module.exports = Post;

//----------------------------------------------------------------------------//
