const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');
const app = express();

app.use(cors);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/pokemon", pokemon);
app.use("/user", user);

app.use(notFound);

app.listen(3000, () => {
    console.log("Server is running...");
});