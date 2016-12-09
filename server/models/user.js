//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//----------------------------------------------------------------------------//

var userSchema = new Schema({
  uid: String,
  displayName: String,
  photoURL: String,
  email: String,
  username: String,
  dateJoined: { type: Date, default: Date.now },
  posts: {[ post ]},
  drafts: {[ draft ]}
});

userSchema.pre('save', function(next) {
  next();
});

// create model from schema
var User = mongoose.model('User', userSchema);

// export model
module.exports = User;

//----------------------------------------------------------------------------//

/*
-- Map to where data is located --

uid: user.providerData[0].uid
displayName: user.providerData[0].displayName
photoURL: user.providerData[0].photoURL
email: user.providerData[0].email
username: ?
dateJoined: from creation

accessToken: user.credential.accessToken
secret: user.credential.accessToekn

*/
