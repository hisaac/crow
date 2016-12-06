//----------------------------------------------------------------------------//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//----------------------------------------------------------------------------//

var userSchema = new Schema({
  email: String,
  name: String,
  username: String,
  date_joined: { type: Date, default: Date.now },
  tweets: { [tweet] }
});

userSchema.pre('save', function(next) {
  next();
});

// create model from schema
var User = mongoose.model('User', userSchema);

// export model
module.exports = User;

//----------------------------------------------------------------------------//
