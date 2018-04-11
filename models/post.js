var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamps');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    user: {type: Schema.ObjectId, ref:'User', require: true},
    description: {type:String, require:true, max:220},
});

module.exports = mongoose.model('Post', PostSchema);