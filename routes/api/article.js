const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
    .route("/")
    .get(articleController.getAll);

router
    .route("/unsaved")
    .get(articleController.getAllUnsaved);

router
    .route("/saved")
    .get(articleController.getAllSaved);

router
    .route("/clear")
    .delete(articleController.deleteAll);

router
    .route("/save/:id")
    .put(articleController.saveArticle);

router
    .route("/unsave/:id")
    .put(articleController.unsaveArticle);

module.exports = router;