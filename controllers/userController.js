const User = require('../models/user');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

exports.index = function(req, res) {
    res.render('index', {title: 'basedbook'});
};

exports.user_logged_in = function(req, res) {
    res.send('Not Implemented: User logged in Homepage');
}

exports.user_create_get = function(req, res, next) {
    res.render('user_form', {title: 'Join Basebook'})
};

exports.user_create_post = [
    body('first_name').isLength({min:1}).trim().withMessage('Missing first name.')
    .isAlphanumeric().withMessage('First name has non-alphanumeric characters. A-z only.'),
    body('family_name').isLength({min:1}).trim().withMessage('Missing last name.')
    .isAlphanumeric().withMessage('Last name has non-alphanumeric characters. A-z only.'),
    body('phonenumber').isLength({min:10}).trim().withMessage('Missing phone number.')
    .isNumeric().withMessage('Phone number has non numberic characters.'),
    body('new_password').isLength({min:8}).trim().withMessage('Password must be 8 characters long.'),

    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('phonenumber').trim().escape(),
    sanitizeBody('new_password').trim().escape(),

    function(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render('user_form', {title: 'Join BaseBook', user: req.body, errors: errors.array()});
        }
        else {
            var user = new User({
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                birth_date: req.body.birth_date,
                phone_number: req.body.phonenumber,
                gender: req.body.gender,
                password: req.body.new_password
            });

            user.save(function(err){
                if (err) {return next(err);}
                res.redirect(user.url);
            })
        }
    }
];

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

exports.user_settings = function(req, res) {
    res.send('Not Implemented: User settings');
}