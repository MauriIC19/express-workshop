const express = require('express');
const app = express();

// Handle requests to http://127.0.0.1:3000/
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// Run server
app.listen(3000, () => {
    console.log("Server is running...");
});