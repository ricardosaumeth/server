const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;// using destructuring!

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);

