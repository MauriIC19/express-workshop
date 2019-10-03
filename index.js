const bodyParser = require('body-parser');
const pokedex = require('./pokedex.json').pokemon;
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Bienvenido a mi Pokédex");
});

app.get("/pokemon", (req, res) => {
    res.status(200).json(pokedex);
});

app.post("/pokemon", (req, res) => {
    res.json(req.body.x);
});

app.get("/pokemon/image/:id", (req, res) => {
    const img = pokedex[req.params.id - 1].img;
    res.send("<img src='" + img + "'>");
})

app.get("/pokemon/\\brandom\\b", (req, res) => {
    const pokemon = pokedex[Math.floor((Math.random()) * 151)];
    res.json(pokemon);
})

app.get("/pokemon/:name([A-Za-z]+)", (req, res) => {
    const name = req.params.name;
    const pokemon = pokedex.filter((pokemon) => pokemon.name == name);
    res.json(pokemon);
});

app.get("/pokemon/:id([0-9]{1,3})", (req, res) => {
    const id = req.params.id;
    res.json(pokedex[id - 1]);
});

app.use((req, res) => {
    res.status(404);
    res.json({ "404": "No existe la página" });
});

app.listen(3000, () => {
    console.log("Server is running...");
});