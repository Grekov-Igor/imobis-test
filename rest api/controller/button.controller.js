const db = require('../db');

class buttonController {
    async createButton(req, res) {
        const {textButton, linkButton, idChannel} = req.body;
        const newButton = await db.query(`insert into "Button" ("textButton", "linkButton", "idChannel") values ($1, $2, $3) returning *`, [textButton, linkButton, idChannel]);
        res.json(newButton.rows[0]);
    }
}

module.exports = new buttonController();