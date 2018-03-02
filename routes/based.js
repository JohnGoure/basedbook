var express = require('express');
var router = express.Router();

// Require controller modules
var user_controller = require('../controllers/userController');

/// USER ROUTES ///

// GET user home page
router.get('/', user_controller.index);

router.post('/', user_controller.user_create_post);

// GET request for creating a User
router.get('/create', user_controller.user_create_get);

// POST request for creating a User
router.post('/create', user_controller.user_create_post);

// GET request for Deleting a User
router.get('/:id/delete', user_controller.user_delete_get);

// POST request for Deleting a User
router.post('/:id/delete', user_controller.user_delete_post);

// GET request for Updating a User
router.get('/:id/update', user_controller.user_update_get);

// POST request for Updating a User
router.post('/:id/update', user_controller.user_update_post);

// GET request for logged in user homepage
router.get('/:id/', user_controller.user_logged_in);

// GET request for logged in user settings
router.get('/:id/settings', user_controller.user_settings);

module.exports = router;
