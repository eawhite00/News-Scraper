var express = require("express");
var mongoose = require ("mongoose");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes");
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/crosscutScraper";
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
