const Router = require('express');
const router = new Router();
const channelController = require('../controller/channel.controller');

router.post('/channel', channelController.createChannel);


module.exports = router;