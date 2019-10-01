const express = require('express');
const app = express();
const pokedex = require('./pokedex.json');

app.get("/", (req, res) => {
    res.send("Bienvenido a mi Pokédex");
});

app.get("/pokemon", (req, res) => {
    res.json(pokedex.pokemon);
});

app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    if (id > 0 && id <= 151) {
        res.json(pokedex.pokemon[req.params.id - 1]);
    }
    else {
        res.send("No hay ningún pokémon con ese ID en la base de datos");
    }
});

app.get("/pokemon/:id/image", (req, res) => {
    const img = pokedex.pokemon[req.params.id - 1].img;
    res.send("<img src='"+img+"'>");
})

app.listen(3000, () => {
    console.log("Server is running...");
});