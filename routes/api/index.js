const router = require("express").Router();
const ArticleRoutes = require("./article");
const NoteRoutes = require("./note");
const ScraperRoutes = require("./scraper");

router.use("/article", ArticleRoutes);
router.use("/note", NoteRoutes);
router.use("/scraper", ScraperRoutes);

module.exports = router;