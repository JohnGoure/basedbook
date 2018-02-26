var express = require('express');
var router = express.Router();

// Require controller modules
var user_controller = require('../controllers/userController');

/// USER ROUTES ///

// GET user home page
router.get('/', user_controller.index);

// GET request for creating a User
router.get('/based/create', user_controller.user_create_get);

// POST request for creating a User
router.get('/based/create', user_controller.user_create_post);

// GET request for Deleting a User
router.get('/based/:id/delete', user_controller.user_delete_get);

// POST request for Deleting a User
router.get('/based/:id/delete', user_controller.user_delete_post);

// GET request for Updating a User
router.get('/based/:id/update', user_controller.user_update_get);

// POST request for Updating a User
router.get('/based/:id/update', user_controller.user_update_post);

// GET request for logged in user homepage
router.get('/based/:id/', user_controller.user_logged_in);

// GET request for logged in user settings
router.get('/based/:id/settings', user_controller.user_settings);

module.exports = router;
