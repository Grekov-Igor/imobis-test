const db = require('../db');

class channelController {
    async createChannel(req, res) {
        const {nameChannel, keyboardIsStandart, messageText, idCampaign} = req.body;
        const newChannel = await db.query(`insert into "Channel" ("nameChannel", "keyboardIsStandart", "messageText", "idCampaign") values ($1, $2, $3, $4) returning *`, [nameChannel, keyboardIsStandart, messageText, idCampaign])
        // console.log(nameCampaign);
        res.json(newChannel.rows[0]);
    }
}

module.exports = new channelController();