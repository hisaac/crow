//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//----------------------------------------------------------------------------//

var draftSchema = new Schema({
  date_created: { type: Date, default: Date.now },
  tweet: { type: String, default: "" }
});

draftSchema.pre('save', function(next) {
  next();
});

// create model from schema
var Draft = mongoose.model('Draft', draftSchema);

// export the model
module.exports = Draft;
//----------------------------------------------------------------------------//
