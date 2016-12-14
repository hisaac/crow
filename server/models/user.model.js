//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user.model');
var Draft = require('../models/draft.model').schema;
var Post = require('../models/post.model').schema;
//----------------------------------------------------------------------------//

var userSchema = new Schema({
  uid: String,
  displayName: String,
  photoURL: String,
  email: String,
  username: String,
  accessToken: String,
  secret: String,
  dateJoined: { type: Date, default: Date.now },
  posts: [ Post ],
  drafts: [ Draft ]
});

userSchema.pre('save', function(next) {
  next();
});

// create model from schema
var User = mongoose.model('User', userSchema);

// export model
module.exports = User;

//----------------------------------------------------------------------------//

