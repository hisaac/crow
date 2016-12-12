//----------------------------------------------------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//----------------------------------------------------------------------------//

var draftSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  text: { type: String, default: "" }
});

draftSchema.pre('save', function(next) {
  next();
});

// create model from schema
var Draft = mongoose.model('Draft', draftSchema);

// export the model
module.exports = Draft;
//----------------------------------------------------------------------------//
