const db = require('../config/database');
const express = require('express');
const user = express.Router();

user.post("/", (req, res) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const pass = req.body.pass;
    const query = `INSERT INTO user (user_mail, user_password, user_name) VALUES ('${mail}', '${pass}', '${name}');`;
    db.query(query).then(rows => {
        res.status(201);
        res.json({ code: 0 });
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Algo salió mal");
    });
});

module.exports = user;