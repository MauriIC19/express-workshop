const express = require('express');
const app = express();
const pokedex = require('./pokedex.json').pokemon;

app.get("/", (req, res) => {
    res.send("¡Bienvenido al Pokédex!");
});

app.get("/pokemon", (req, res) => {
    res.json(pokedex);
});

app.listen(3000, () => {
    console.log("Server is running...");
});