var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: {type:String, require: true, max: 100},
        family_name: {type:String, require:true, max:100},
        phone_number: {type: Number, max: 11},
        birth_date: {type: Date, required: true},
        gender: {type: String, required:true},
        password: {type:String, require:true, max:100}
    }
);

UserSchema
.virtual('url')
.get(function() {
    return '/based/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);