//Controller for the scraper; I could probably have lumped this in with articleController
//but it felt nice to separate them.

var db = require("../models");
var scrapeCrosscut = require("../scripts/scrapeCrosscut");

module.exports = {

    scrapeArticles: function (req, res) {
        return scrapeCrosscut().then(function (scrapeResponse) {
            return db.Article.create(scrapeResponse);
        }).then(function (dbReponse) {
            if (dbReponse.length === 0) {
                res.json({
                    message: "No articles found"
                });
            } else {
                res.json({
                    message: "Articles found!"
                });
            }
        }).catch(function (err) {
            console.log(err);
            res.json({
                message: "Scrape complete!!"
            });
        });
    }

}