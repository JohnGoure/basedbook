var User = require('../models/user');

var async = require('async');

exports.index = function(req, res) {
    res.render('index', {title: 'basedbook'});
};

exports.user_logged_in = function(req, res) {
    res.send('Not Implemented: User logged in Homepage');
}

exports.user_settings = function(req, res) {
    res.send('Not Implemented: User settings');
}

exports.user_create_get = function(req, res) {
    res.send('Not Implemented: User create GET');
};

exports.user_create_post = function(req, res) {
    res.send('Not Implemented: User create POST');
};

exports.user_delete_get = function(req, res) {
    res.send('Not Implemented: User delete GET');
};

exports.user_delete_post = function(req, res) {
    res.send('Not Implemented: User delete POST');
};

exports.user_update_get = function(req, res) {
    res.send('Not Implemented: User update GET');
};

exports.user_update_post = function(req, res) {
    res.send('Not Implemented: User update POST');
};