var router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  db.Article.find({ saved: false })
    //If we don't make the response lean, it won't play nice with the version of handlebars running.
    .lean()
    .sort({ date: -1 })
    .then(function(dbResponse) {
      res.render("home", { articleData: dbResponse });
    });
});

router.get("/saved", function(req, res) {
  db.Article.find({ saved: true })
  //If we don't make the response lean, it won't play nice with the version of handlebars running.
    .lean()
    .sort({ date: -1 })
    .then(function(dbResponse) {
      res.render("saved", { articleData: dbResponse });
    });
});

module.exports = router;
