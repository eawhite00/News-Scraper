var router = require("express").Router();
var noteController = require("../../controllers/noteController");

router
    .route("/")
    .post(noteController.createNote)

router
    .route("/:id")
    .get(noteController.findNote)
    .delete(noteController.deleteNote)

module.exports = router;
