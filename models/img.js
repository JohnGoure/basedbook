var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamps');

var Schema = mongoose.Schema;

var ImgSchema = new Schema({
    user: {type: Schema.ObjectId, ref:'User', require: true},
    img: {data: Buffer, contentType: String},
});

ImgSchema
.virtual('url')
.get(function() {
    return '/' + this.user + '/' + this._id
})

module.exports = mongoose.model('Img', ImgSchema);