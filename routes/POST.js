var express = require('express');
var router = express.Router();
var User = require('../models/user')


// Get rout for reading data
router.get('/', function(req, res, next) {
    return res.sendFile(path.join(__dirname + 'templateLogReg/index.html'));
});


// Post rout for updating data
router.post('/', function (req, res, next) {
    if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        }

        User.create(userData, function(err, user) {
            if (err) {
                return next(err)
            } else {
                return res.redirect('/profile')
            }
        });
    }
});

// Get /logout
router.get('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});