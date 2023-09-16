const db = require('../db');

class campaignController {
    async createCamapign(req, res) {
        const {nameCampaign} = req.body;
        const newCampaign = await db.query(`insert into "Campaign" ("nameCampaign") values ($1) returning *`, [nameCampaign])
        // console.log(nameCampaign);
        res.json(newCampaign.rows[0]);
    }
}

module.exports = new campaignController();