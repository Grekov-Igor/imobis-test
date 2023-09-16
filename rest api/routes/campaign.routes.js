const Router = require('express');
const router = new Router();
const campaignController = require('../controller/campaign.controller');

router.post('/campaign', campaignController.createCamapign);


module.exports = router;