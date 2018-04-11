var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamps');

var Schema = mongoose.Schema;

var ImgSchema = new Schema({
    user: {type: Schema.ObjectId, ref:'User', require: true},
    img: {data: Buffer, contentType: String},
});

module.exports = mongoose.model('Img', ImgSchema);