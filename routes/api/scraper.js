const router = require("express").Router();
const scraperController = require("../../controllers/scraperController");

router
    .route("/")
    .get(scraperController.scrapeArticles);

module.exports = router;