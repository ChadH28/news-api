const express = require("express");
const cors = require("cors");
const app = express();
const routes = require('./app/routes/index')
// set port, listen for requests
const PORT = process.env.PORT || 4000;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json({
  extended: false
}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// bringing in routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.exports = app;