const express = require('express');
const app = express();

app.get("/pokemon/:id", (req, res, next) => {
    console.log(req.params);
    res.send(req.params.id);
});

app.listen(3000, () => {
    console.log("Server is running...");
});