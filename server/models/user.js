//----------------------------------------------------------------------------//
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  name: String,
  username: String,
  date_joined: { type: Date, default: Date.now },
  tweets: { [tweet] }
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
