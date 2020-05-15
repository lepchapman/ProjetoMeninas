var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require("mongoose-unique-validator");
var schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
});

schema.plugin(mongooseUniqueValidator);
schema.path('email').validate(function(value, done) {
  this.model('User').count({ email: value }, function(err, count) {
      if (err) {
          return done(err);
      } 
      done(!count);
  });
}, 'Email already exists');
module.exports = mongoose.model("User", schema);
