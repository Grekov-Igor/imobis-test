const Router = require('express');
const router = new Router();
const buttonController = require('../controller/button.controller');

router.post('/button', buttonController.createButton);


module.exports = router;