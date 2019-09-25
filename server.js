// Dependencies
// =============================================================
require("dotenv").config();
var express = require("express");
const keys = require("./public/js/keys")

// Sets up the Express App
// =============================================================
var app = module.exports = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
