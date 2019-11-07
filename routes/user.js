const db = require('../config/database');
const express = require('express');
const jwt = require('jsonwebtoken');
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

user.post("/login", (req, res) => {
    const mail = req.body.mail;
    const pass = req.body.pass;
    const query = `SELECT * FROM user WHERE user_mail = '${mail}' AND user_password = '${pass}'`;
    db.query(query).then(rows => {
        if (rows.length >= 1) {
            const token = jwt.sign({
                id: rows[0].user_id,
                mail: rows[0].user_mail
            }, "debugkey");
            res.status(200);
            res.json({ code: 0, message: token });
        }
        else {
            res.status(200);
            res.json({ code: 1, message: "Usuario y/o contraseña incorrectos" });
        }
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Algo salió mal");
    });
});

module.exports = user;