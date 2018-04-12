var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        first_name: {
            type:String, 
            required: true, max: 100
        },
        family_name: {
            type:String, 
            required:true, max:100
        },
        phone_number: {
            type: Number
        },
        birth_date: {
            type: Date, 
            required: true
        },
        gender: {
            type: String, 
            required:true
        }
    }
);

UserSchema
.virtual('url')
.get(function() {
    return '/based/' + this._id;
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', UserSchema);