var mongoose = require('mongoose')
        , Schema = mongoose.Schema
        ,userSchema;
        

userSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true}
    
});

var User = mongoose.model('User', userSchema);

module.exports = User;