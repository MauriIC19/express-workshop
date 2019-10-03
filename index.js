const express = require('express');
const app = express();
const pokedex = require('./pokedex.json');

app.get("/", (req, res) => {
    res.send("Bienvenido a mi Pokédex");
});

app.get("/pokemon", (req, res) => {
    res.json(pokedex.pokemon);
});

app.get("/pokemon/\\brandom\\b", (req, res) => {
    res.send("Entraste a pokemon/random");
})

app.get("/pokemon/:name([A-Za-z]+)", (req, res) => {
    const name = req.params.name;
    const pokemon = pokedex.pokemon.filter((pokemon) => pokemon.name == name);
    res.json(pokemon);
});

app.get("/pokemon/:id([0-9]{1,3})", (req, res) => {
    const id = req.params.id;
    res.json(pokedex.pokemon[id - 1]);
});

app.get("/pokemon/:id/image", (req, res) => {
    const img = pokedex.pokemon[req.params.id - 1].img;
    res.send("<img src='" + img + "'>");
})

app.listen(3000, () => {
    console.log("Server is running...");
});